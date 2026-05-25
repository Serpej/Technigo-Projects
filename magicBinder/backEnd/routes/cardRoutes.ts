import express from "express";
import { Card } from "../models/Card";
import { authenticateUser } from "../middleware/authenticateUser";
import { guardResponse, requestNotFound, serverError } from "../utils/responses";

export const cardRouter = express.Router();

cardRouter
  .post("/", authenticateUser)
  .post("/", async (req, res) => {
    
    if (!req.user || !req.user._id) {
      guardResponse(res, "Bad Request.");
      return
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
      serverError(res, "Server error.", error);
    }
  })
  .delete("/:scryfallId", authenticateUser)
  .delete("/:scryfallId", async (req, res) => {

    if (!req.user || !req.user._id) {
      guardResponse(res, "Bad Request.");
      return;
    }

    try {  
      const deletedCard = await Card.findOneAndDelete({
        scryfallId: req.params.scryfallId, 
        userId: req.user._id.toString()
      });

      if(!deletedCard) {
        requestNotFound(res, "Card not found.");
        return;
      }

      res.status(200).json({
        success: true,
        message: "Card deleted",
        scryfallId: req.params.scryfallId,
      });
    } catch (error) {
      serverError(res, "Server error.", error);
    }
  })