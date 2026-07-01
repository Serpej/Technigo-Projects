import {Schema, model} from "mongoose";

export type ICard = {
  "scryfallId": string,
  "name": string,
  "image_uris": {
    "small": string,
    "normal": string,
    "large": string,
    "art_crop": string,
    "border_crop": string,
  },
  "userId": string
};

export const cardSchema = new Schema<ICard> ({
 scryfallId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image_uris: {
    type: Object,
    required: true
  },
  userId: { 
    type: String,
    required: true
  }
});

export const Card = model<ICard>("card", cardSchema);