import express from "express";
import { cardBinder } from "../models/Binder"
import { authenticateUser } from "../middleware/authenticateUser";

export const binderRouter = express.Router();

binderRouter
  .post("/", authenticateUser)
  .post("/", async (req, res) => {

    if(!req.body.binderName || !req.user || !req.user._id) {
      res.status(400).json({
        success: false,
        message: "Bad Request"
      });
      return;
    }
    try {
      const binderName = req.body.binderName;
      const binder = new cardBinder({name: binderName, userId: req.user._id})
      await binder.save();

      res.status(201).json({
        success: true,
        message: "Binder created.",
        binderName: binderName,
        userid: req.user._id
      })
    } catch (error) {
        res.status(400).json({
        success: false,
        message: "Bad request",
        error: error
      })
    }

  })
  .get("/:binderName", authenticateUser)
  .get("/:binderName", async (req, res) => {

    if (!req.user || !req.user._id) {
      res.status(400).json({
        success: false,
        message: "Bad Request"
      });
      return;
    }

    try {
      const binder = await cardBinder.findOne({
      name: req.params.binderName,
      userId: req.user._id
      }).populate("cards");

      if(!binder) {
        res.status(404).json({
          success: false,
          message: "Binder not found."
        })
        return;
      }

      res.status(200).json({
        success: true,
        binder
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error
      });
    }

  })
