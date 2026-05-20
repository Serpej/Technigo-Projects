import {Schema, model} from "mongoose";

export type ICard = {
  "scryfallId": string,
  "name": string,
  "imageUri": string,
  "userId": string
};

const cardSchema = new Schema<ICard> ({
  scryfallId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  imageUri: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
});

export const Card = model<ICard>("Card", cardSchema);