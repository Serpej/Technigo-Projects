import mongoose, {Schema, model } from "mongoose";


export type  IBinder = {
  "name": string,
  "cards": {
    cardId: mongoose.Types.ObjectId,
    condition: string,
    amount: number,
  }[],
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
  userId: {
    type: mongoose.Types.ObjectId,
    required: true
  } 
});

export const CardBinder = model<IBinder>("cardBinder", binderSchema)