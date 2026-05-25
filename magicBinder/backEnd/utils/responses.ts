import { Response } from "express"

export const badRequest = (res:Response, message:string, error:unknown) => {
  return res.status(400).json({
    success: false,
    message: message,
    error: error
  });
}

export const serverError = (res:Response, message:string, error:unknown) => {
  return res.status(500).json({
    success: false,
    message: message,
    error: error
  });
}

export const guardResponse = (res:Response, message:string) => {
  return res.status(400).json({
    success: false,
    message: message
  });
}

export const requestNotFound = (res:Response, message:string) => {
  return  res.status(404).json({
    message: message
  });
}

export const requestUnauthorized = (res:Response, message:string) => {
  return res.status(401).json({
    message: message
  });
}