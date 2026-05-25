import express from "express";
import { Card } from "../models/Card";
import { authenticateUser } from "../middleware/authenticateUser";

export const cardRouter = express.Router();

cardRouter
  .post("/", authenticateUser)
  .post("/", async (req, res) => {
    
    if (!req.user || !req.user._id) {
        res.status(400).json({
        success: false,
        message: "Bad Request"
      });
      return;
    }

    const { id: scryfallId, name, image_uris: imageUri } = req.body;

    try {
      const card = new Card({ scryfallId, name, imageUri, userId: req.user._id});
      await card.save();
      res.status(201).json({
        success: true,
        message: "Card created",
        name: name,
        scryfallId: scryfallId,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Bad request",
        error: error
      })
    }
  })
  .delete("/:scryfallId", authenticateUser)
  .delete("/:scryfallId", async (req, res) => {

    if (!req.user || !req.user._id) {
        res.status(400).json({
        success: false,
        message: "Bad Request"
      });
      return;
    }

    try {  
      const deletedCard = await Card.findOneAndDelete({
        scryfallId: req.params.scryfallId, 
        userId: req.user._id.toString()
      });

      if(!deletedCard) {
        res.status(404).json({
          success: false,
          message: "Card not found."
        })
        return;
      }

      res.status(200).json({
        success: true,
        message: "Card deleted",
        scryfallId: req.params.scryfallId,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error
      })
    }
  })