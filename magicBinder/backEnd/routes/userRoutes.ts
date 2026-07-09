import { User } from "../models/User";
import type { SignUpResponse, LoginResponse, GetUserResponse } from "../types/responses";
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import { authenticateUser } from "../middleware/authenticateUser";
import { requestNotFound, requestUnauthorized, serverError, badRequest} from "../utils/responses";

export const userRouter = express.Router();

userRouter
  .post("/", async (req: Request, res: Response<SignUpResponse>) => {
    try {
      const { name, email, password } = req.body;

      if(name.length < 5) {
        badRequest(res,"Name is too short. Minimum 5 characters");
        return;
      }

      if(await User.findOne({ name })) {
        badRequest(res, "An account with that information already exists.");
        return;
      }

      if(await User.findOne({ email })) {
        badRequest(res, "An account with that information already exists.");
        return;
      }

      const emailRegex = /^[a-z0-9+.-]+@[a-z0-9.]+\.[a-z]+$/i;
      if(!emailRegex.test(email)){
        badRequest(res, "An account with that information already exists.");
        return;
      }

      if(password.length < 5) {
        badRequest(res,"Password is too short. Minimum 5 characters");
        return;
      }

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
        name: name,
        email: email,
        id: user._id,
        accessToken: user.accessToken,
      });
    } catch (error) {
      serverError(res, "Could not create user.", error);
    }
  })
  .get("/", authenticateUser)
  .get("/", async (req:Request, res: Response<GetUserResponse>) => {
    const user = req.user;

    if(!user) {
      requestNotFound(res, "User not found.");
      return
    }

    res.status(200).json({
      success: true,
      name: user.name,
      email: user.email,
      id: user._id,
      accessToken: user.accessToken
    });
  })
  .post("/login", async (req: Request, res: Response<LoginResponse>) => {
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
        message: "User logged in",
        name: user.name,
        email: user.email,
        id: user._id,
        accessToken: user.accessToken
      })

    } catch (error) {
      serverError(res, "Server error.", error)
    }
  })
  .patch("/:id", authenticateUser)
  .patch("/:id", async (req:Request, res:Response) => {

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


