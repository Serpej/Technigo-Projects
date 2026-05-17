import express, { NextFunction, Request, Response } from "express";
import { User } from "../models/User";

export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findOne({
    accessToken: req.get("Authorization")
  });
  if (user) {
    req.user = user;
  } else {
    res.status(401).json({
      loggedOut: true 
    })
  }
}