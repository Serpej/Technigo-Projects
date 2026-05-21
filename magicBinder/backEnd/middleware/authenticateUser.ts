import express, { NextFunction, Request, Response } from "express";
import { User } from "../models/User";

export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    res.status(401).json({
      loggedOut: true 
    });
    return;
  }

  const user = await User.findOne({ accessToken: token});

  if (!user) {
    res.status(401).json({
      loggedOut: true 
    });
    return;
  }

  req.user = user;
  next();
}