import express from "express";
import { CardBinder } from "../models/Binder";
import { Card } from "../models/Card";
import { authenticateUser } from "../middleware/authenticateUser";
import { guardResponse, serverError, requestNotFound, badRequest } from "../utils/responses";
import { escapedRegex } from "../helperFunctions/escapeRegex";

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
      const binder = new CardBinder({ name: binderName, userId: req.user._id, binderImage: "", userName: req.user.name })
      await binder.save();

      res.status(201).json({
        success: true,
        message: "Binder created.",
        binderName: binderName,
        binderId: binder._id
      })
    } catch (error) {
      serverError(res, "Server error.", error);
    }

  })
  .get("/", authenticateUser)
  .get("/", async (req, res) => {

    if (!req.user || !req.user._id) {
      guardResponse(res, "Bad request.");
      return
    }

    try {
      const binders = await CardBinder.find({userId: req.user._id})

      const binderObjects = binders.map((binder) => {
        return { 
          name: binder.name,
          binderImage: binder.binderImage,
          _id: binder._id,
          userName: binder.userName 
        }
      })

      res.status(200).json({
        success: true,
        binderObjects
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
      }).populate("cards.cardId");

      if(!binder) {
        guardResponse(res, "Binder not found.");
        return;
      }

      res.status(200).json({
        success: true,
        binder: binder
      });

    } catch (error) {
      serverError(res, "Server error.", error);
    }
  })
  .get("/otherUsers/cards/:cardName", authenticateUser)
  .get("/otherUsers/cards/:cardName", async (req, res) => {

    if(!req.params.cardName || !req.user || !req.user._id) {
      guardResponse(res, "Bad request.");
      return;
    }
    
    const cardName = req.params.cardName;
    const CardNameRegex = escapedRegex(cardName);

    try {

      const arrayOfCardDocuments = await Card.find({ name: CardNameRegex });

      if(arrayOfCardDocuments.length === 0) {
        res.status(200).json({
          message: "No matches found."   
        });
        return
      };

      const arrayOfCardIds = arrayOfCardDocuments.map((document) => {
        return document._id;
      });

      const bindersWithCard = await CardBinder.find({ "cards.cardId": { $in: arrayOfCardIds }, userId:{ $ne: req.user._id } });

      const arrayOfuserNameWithBinders = bindersWithCard.map((binder) => {
        return {
          userName: binder.userName,
          binderName: binder.name
        }
      });

      res.status(200).json({
        arrayOfuserNameWithBinders
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

    const { binderName: name, newBinderImage: image } = req.body;

    try {
      const updatedBinderName = await CardBinder.findOneAndUpdate({ name: req.params.binderName, userId: req.user._id }, { $set: { name: name, binderImage: image }}, { returnDocument: 'after' });

    if(!updatedBinderName) {
      guardResponse(res, "Binder not found.");
      return;
    }

    res.status(200).json({
      success: true,
      message: "Binder name updated.",
      binderName: name,
      binderImage: image,
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
    const { _id: cardId, condition, amount } = req.body;

    if(!cardId || !condition) {
      badRequest(res, "Bad Request");
      return
    }

    try {
      const updatedBinder = await CardBinder.findOneAndUpdate(
        { name: binderName,
          userId: req.user._id },
        { $push: {cards: {cardId, condition, amount } } },
        { returnDocument: "after" }
      );

      if(!updatedBinder) {
        requestNotFound(res, "Binder not found");
        return
      }

      res.status(200).json({
        success: true,
        message: "Card added to binder.",
        binderName: binderName,
        card_id: cardId
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
  
    const{ binderName, cardId } = req.params;

    try {  
      const cardRemovedFromBinder = await CardBinder.findOneAndUpdate(
        {
          name: binderName, 
          userId: req.user._id
        },
        { $pull: { cards:{ cardId } } }
      );

      if(!cardRemovedFromBinder) {
        requestNotFound(res, "Binder not found.");
        return;
      }

      res.status(200).json({
        success: true,
        message: `Card deleted from ${binderName}`,
        cardId: cardId,
      });
    } catch (error) {
      serverError(res, "Server error.", error);
    }
  })
