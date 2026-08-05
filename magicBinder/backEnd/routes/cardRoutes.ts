import express from "express";
import {
  Card,
  SingleFacedCard,
  DoubleFacedCard,
  ReversibleCard,
  SplitFacedCard
} from "../models/Card";  
import { CardRequestBody } from "../types/requests";
import { authenticateUser } from "../middleware/authenticateUser";
import { guardResponse, serverError } from "../utils/responses";

export const cardRouter = express.Router();

cardRouter
  .post("/", authenticateUser)
  .post("/", async (req, res) => {
    
    if (!req.user || !req.user._id) {
      guardResponse(res, "Bad Request.");
      return
    }

    const cardData: CardRequestBody = req.body; 

    let card;
    switch (cardData.layout) {
      case "reversible_card":
  
        card = new ReversibleCard({
          ...cardData,
          type_line: `${cardData.card_faces[0].type_line} // ${cardData.card_faces[1].type_line}`
        });
        break;

      case "split":
      case "flip":
      case "adventure":
      case "prepare":
        card = new SplitFacedCard(cardData);
  break;
      case "transform":
      case "modal_dfc":

        card = new DoubleFacedCard(cardData);
        break;

      default:

        card = new SingleFacedCard(cardData);
        break;
    }

    try {

      const existingCard = await Card.findOne({ id: cardData.id });

      if(!existingCard) {

        await card.save();
        res.status(201).json({
          success: true,
          message: "Card created",
          name: cardData.name,
          id: cardData.id,
          _id: card._id
        });

      } else {
        res.status(200).json({
          success: true,
          message: "Card already exists",
          name: cardData.name,
          id: cardData.id,
          _id: existingCard._id
        })
      }
    } catch (error) {
      serverError(res, "Server error.", error);
    }
  })