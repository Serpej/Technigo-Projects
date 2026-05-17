import {Schema, model} from "mongoose"
import crypto from "crypto";

export type IUser = {
  "name": string,
  "email": string,
  "password": string,
  "accessToken": string,
};

const userSchema = new Schema<IUser> ({
  name: {
    type: String,
    unique: true,
    minLength: 5 
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 5
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex")
  }
});

export const User = model<IUser>("User", userSchema)