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
  .get("/", authenticateUser)
  .get("/", async (req, res) => {
    const user = req.user;
    if(user) {
      res.status(200).json({
        user
      })
    } else {
      res.status(404).json({
        message: "User not found."
      })
    }
  })
  .patch("/:id", authenticateUser)
  .patch("/:id", async (req, res) => {
    const user = req.user;
    if (user) {
      const oldPassword = req.body.oldPassword;
      const newPassword = req.body.newPassword;
      if(await bcrypt.compare(oldPassword, user.password)) {
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {password: hashedNewPassword}, {new: true});
        res.status(200).json({
          message: "Password updated successfully"
        })
      } else {
      res.status(401).json({
        message: "Update failed."
      })
    }
    }
    
  })


