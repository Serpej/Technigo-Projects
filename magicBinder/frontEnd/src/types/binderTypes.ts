import type { ScryfallCard } from "./cardTypes";

export type cardBinderSummary = {
  "name": string,
  "_id": string
}

export type cardBinderSearchSuccessfull = {
  "success": true,
  "binderObjects": cardBinderSummary[] 
}

export type cardBinderSearchEmpty = {
  "success": false,
  "message": string,
  "error"?: string
}

export type cardBinderResult = cardBinderSearchSuccessfull | cardBinderSearchEmpty;

export type cardBinder = cardBinderSummary & { 
  "cards": ScryfallCard[], 
  "userId": string 
}

export type BinderNameState = {
  "binderState": {
    "binderName": string
  }
}