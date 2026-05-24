import express from "express";
import { cardBinder } from "../models/Binder"
import { authenticateUser } from "../middleware/authenticateUser";

export const binderRouter = express.Router();

binderRouter
  .get("/:binderName", authenticateUser)
  .get("/:binderName", async (req, res) => {

    if (!req.user || !req.user._id) {
        res.status(400).json({
        success: false,
        message: "Bad Request"
      });
      return;
    }

    const binder = await cardBinder.findOne({
      name: req.params.binderName,
      userId: req.user._id
    })

  })
