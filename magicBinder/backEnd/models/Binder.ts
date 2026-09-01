import mongoose, {Schema, model } from "mongoose";


export type  IBinder = {
  "name": string,
  "cards": {
    cardId: mongoose.Types.ObjectId,
    condition: string,
    amount: number,
  }[],
  "binderImage": string,
  "userId": mongoose.Types.ObjectId
};

const binderSchema = new Schema<IBinder>({
  name: {
    type: String,
    required: true,
  },
  cards: [{
    cardId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "card",
      required: true,
    },
    condition: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: false,
      default: 1
    }
  }],
    binderImage: {
      type: String,
      validate: {
        validator: (value: string) => typeof value === "string",
        message: "binderImage must be a string"
      }
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: true
    } 
});

export const CardBinder = model<IBinder>("cardBinder", binderSchema)