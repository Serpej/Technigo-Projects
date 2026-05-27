import express from "express";
import { CardBinder } from "../models/Binder";
import { Card } from "../models/Card";
import { authenticateUser } from "../middleware/authenticateUser";
import { guardResponse, serverError, requestNotFound, badRequest } from "../utils/responses";

export const binderRouter = express.Router();

binderRouter
  .post("/", authenticateUser)
  .post("/", async (req, res) => {

    if(!req.body.binderName|| !req.user || !req.user._id) {
      guardResponse(res, "Bad request.");
      return
    }
    try {
      const binderName = req.body.binderName;
      const binder = new CardBinder({name: binderName, userId: req.user._id})
      await binder.save();

      res.status(201).json({
        success: true,
        message: "Binder created.",
        binderName: binderName,
      })
    } catch (error) {
      serverError(res, "Server error.", error);
    }

  })
  .get("/:binderName", authenticateUser)
  .get("/:binderName", async (req, res) => {

    if (!req.user || !req.user._id) {
      guardResponse(res, "Bad request.");
      return
    }

    try {
      const binder = await CardBinder.findOne({
      name: req.params.binderName,
      userId: req.user._id
      }).populate("cards");

      if(!binder) {
        guardResponse(res, "Binder not found.");
        return;
      }

      res.status(200).json({
        success: true,
        binder
      });
    } catch (error) {
      serverError(res, "Server error.", error);
    }
  })
  .patch("/:binderName", authenticateUser)
  .patch("/:binderName", async (req, res) => {

    if(!req.params.binderName || !req.user || !req.user._id) {
        guardResponse(res, "Bad request.");
      return;
    }

    const { binderName: name } = req.body;

    try {
      const updatedBinderName = await CardBinder.findOneAndUpdate({name: req.params.binderName, userId: req.user._id}, { $set: { name }}, { returnDocument: 'after' });

    if(!updatedBinderName) {
      guardResponse(res, "Binder not found.");
      return;
    }

    res.status(200).json({
      success: true,
      message: "Binder name updated.",
      binderName: name,
    })

    } catch (error) {
      serverError(res, "Server error.", error);
    }
  })
  .delete("/:binderName", authenticateUser)
  .delete("/:binderName", async (req, res) => {

    if (!req.user || !req.user._id) {
      guardResponse(res, "Bad request.");
      return
    }
    
    try {
      const binderName = req.params.binderName;
      const deletedBinder = await CardBinder.findOneAndDelete({
        name: binderName,
        userId: req.user._id
      })

      if(!deletedBinder) {
        requestNotFound(res, "Binder not found.");
        return
      }

      res.status(200).json({
        success: true,
        message: "Binder deleted.",
        binderName: binderName
      });

    } catch (error) {
      serverError(res, "Server error.", error);
    }
  })
  .post("/:binderName/cards", authenticateUser)
  .post("/:binderName/cards", async (req, res) => {

    if (!req.user || !req.user._id) {
      guardResponse(res, "Bad request.");
      return
    }

    const binderName = req.params.binderName;
    const { _id: cardId } = req.body;

    if(!cardId) {
      badRequest(res, "Bad Request");
      return
    }

    try {
      const updatedBinder = await CardBinder.findOneAndUpdate(
        { name: binderName,
          userId: req.user._id },
        { $push: {cards: cardId} },
        { returnDocument: "after" }
      );

      if(!updatedBinder) {
        requestNotFound(res, "Binder not found");
        return
      }

      res.status(200).json({
        success: true,
        message: "Card added to binder.",
        _id: cardId
      });

    } catch (error) {
      serverError(res, "Server error", error);
    }
  })
  .delete("/:binderName/cards/:cardId", authenticateUser)
  .delete("/:binderName/cards/:cardId", async (req, res) => {

    if (!req.user || !req.user._id) {
      guardResponse(res, "Bad Request.");
      return;
    }
    const binderName = req.params.binderName;
    const cardId = req.params.cardId;

    try {  
      const cardRemovedFromBinder = await CardBinder.findOneAndUpdate(
        {
          name: binderName, 
          userId: req.user._id
        },
        { $pull: { cards: cardId }}
      );

      if(!cardRemovedFromBinder) {
        requestNotFound(res, "Binder not found.");
        return;
      }

      await Card.findOneAndDelete({ _id: cardId });

      res.status(200).json({
        success: true,
        message: `Card deleted from ${binderName}`,
        cardId: cardId,
      });
    } catch (error) {
      serverError(res, "Server error.", error);
    }
  })
