import type { PopulatedScryfallCard } from "./cardTypes";

export type binderStoreType = {
  binders: cardBinderSummary[],
  fetchBinders: (accessToken: string) =>  Promise<boolean | undefined>,
  addBinder: (binder: cardBinderSummary) => void,
}

export type cardBinderResponse = {
  success: boolean,
  binder: {
    "name": string,
    "cards": {
      cardId: PopulatedScryfallCard,
      condition: string,
      amount: number,
    }[],
  "userId": string
  }
}

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
  "cards": PopulatedScryfallCard[], 
  "userId": string 
}

export type BinderNameState = {
    "binderName": string,
    "binderId": string,
}