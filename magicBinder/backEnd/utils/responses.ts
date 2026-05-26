import { Response } from "express"

export const badRequest = (res:Response, message:string, error:unknown) => {
  const errorMessage = error instanceof Error ? error.message : String(error);
  return res.status(400).json({
    success: false,
    message: message,
    error: errorMessage
  });
}

export const serverError = (res:Response, message:string, error:unknown) => {
  const errorMessage = error instanceof Error ? error.message : String(error);
  return res.status(500).json({
    success: false,
    message: message,
    error: errorMessage
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