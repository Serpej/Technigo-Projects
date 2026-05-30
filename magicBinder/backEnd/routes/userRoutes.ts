import { User } from "../models/User";
import express from "express";
import bcrypt from "bcrypt";
import { authenticateUser } from "../middleware/authenticateUser";
import { requestNotFound, requestUnauthorized, serverError} from "../utils/responses";

export const userRouter = express.Router();

userRouter
  .post("/", async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const salt = await bcrypt.genSalt();
      const user = new User({
        name, 
        email, 
        password: await bcrypt.hash(password, salt)
      });

      await user.save();
      res.status(201).json({
        success: true,
        message: "User created",
        id: user._id,
        accessToken: user.accessToken,
      });
    } catch (error) {
      serverError(res, "Could not create user.", error);
    }
  })
  .get("/", authenticateUser)
  .get("/", async (req, res) => {
    const user = req.user;
    if(!user) {
      requestNotFound(res, "User not found.");
      return
    }
    res.status(200).json({
    user
    });
  })
  .post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
      const user = await User.findOne({ email });
      if(!user) {
        requestNotFound(res, "Invalid credentials.")
        return
      }
      const passwordMatch = await bcrypt.compare(password, user.password)
      if(!passwordMatch) {
        requestUnauthorized(res, "Invalid credentials.")
        return
      }
      res.status(200).json({
        success: true,
        accessToken: user.accessToken 
      })
    } catch (error) {
      serverError(res, "Server error.", error)
    }
  })
  .patch("/:id", authenticateUser)
  .patch("/:id", async (req, res) => {

    if (!req.user) {
      requestUnauthorized(res, "Update failed.");
      return
    }

    try {
      const oldPassword = req.body.oldPassword;
      const newPassword = req.body.newPassword;

      if(!await bcrypt.compare(oldPassword, req.user.password)) {
        requestUnauthorized(res, "Update failed.");
        return
      }

      const hashedNewPassword = await bcrypt.hash(newPassword, 10);

      await User.findByIdAndUpdate(
        req.params.id, 
        {password: hashedNewPassword}, 
        {new: true}
      );
      
      res.status(200).json({
      message: "Password updated successfully"
      })

    } catch (error) {
      serverError(res, "Server error.", error);
    }

    
  })


