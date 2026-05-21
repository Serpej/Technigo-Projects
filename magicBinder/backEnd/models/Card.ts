import {Schema, model} from "mongoose";

export type ICard = {
  "scryfallId": string,
  "name": string,
  "imageUri": object,
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
    type: Object,
    required: true
  }
});

export const Card = model<ICard>("Card", cardSchema);