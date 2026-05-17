import { User } from "../models/User";
import express from "express";
import bcrypt from "bcrypt";
import { authenticateUser } from "../middleware/authenticateUser"

export const userRouter = express.Router();

userRouter
  .post("/", async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const salt = await bcrypt.genSalt();
      const user = new User({name, email, password: await bcrypt.hash(password, salt)});
      await user.save();
      res.status(201).json({
        success: true,
        message: "User created",
        id: user._id,
        accessToken: user.accessToken,
      });
    } catch (error) {
        res.status(400).json({
        success: false,
        message: "Could not create user",
        errors: error
      });
    }
  })

