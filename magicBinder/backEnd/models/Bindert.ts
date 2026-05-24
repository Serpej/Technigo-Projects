import mongoose, {Schema, model } from "mongoose";


export type  IBinder = {
  "name": string,
  "cards": mongoose.Types.ObjectId[],
  "userId": string
};

const binderSchema = new Schema<IBinder>({
  name: {
    type: String,
    required: true,
  },
  cards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "card"
  }],
  userId: {
    type: String,
    required: true
  } 
});

export const cardBinder = model<IBinder>("cardBinder", binderSchema)