import express from "express";
import { Card } from "../models/Card";
import { authenticateUser } from "../middleware/authenticateUser";

export const cardRouter = express.Router();

cardRouter
  .post("/", authenticateUser)
  .post("/", async (req, res) => {
    
    if (!req.user || !req.user._id) {
        res.status(400).json({
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
        user: req.user._id,
      });
    } catch (error) {
      res.status(400).json({
        message: "bad request",
        error: error
      })
    }
  });