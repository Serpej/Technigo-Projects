import type { Location } from "react-router-dom";

export type UserAuth = {
  accessToken: string,
  setAccessToken: (token: string) =>  void,
  userName: string,
  setUserName: (name: string) => void,
  userEmail: string,
  setUserEmail: (email: string) => void,
  logOutUser: () => void,
}


export type ImageUris = {
  "small": string,
  "normal": string,
  "large": string,
  "art_crop": string,
  "border_crop": string,
}

export type Legalities = {
  "standard": string,
  "pioneer": string,
  "modern": string,
  "legacy": string,
  "pauper": string,
  "commander": string,
}

type ScryfallCardBase = {
  "id": string,
  "name": string,
  "type_line": string,
  "set_name": string,
  "set": string,
  "prices": {
    "eur": string,
    "eur_foil": string,
  },
  "game_changer": boolean,
  "foil": boolean,
  "nonfoil": boolean,
  "prints_search_uri": string,
  "legalities": Legalities,
  "userId": string
}

export type ScryfallCardFace = {
  "name": string,
  "mana_cost": string,
  "type_line": string,
  "oracle_text": string,
  "image_uris": ImageUris,
  "power"?: string,
  "toughness"?: string,
}

export type ScryfallSingleFacedCard = ScryfallCardBase & {
  "mana_cost": string,
  "oracle_text": string,
  "image_uris": ImageUris,
}

export type ScryfallDoubleFacedCard = ScryfallCardBase & {
  "card_faces": ScryfallCardFace[],
}

export type ScryfallCard = ScryfallSingleFacedCard | ScryfallDoubleFacedCard;

export type ScryFallSearchResponse = {
  "has_more": boolean,
  "next_page"?: string,
  "data": ScryfallCard[],
}
export type CardDetailsState = {
  background : Location,
  card: ScryfallCard,
}

export type CardPrints = {
  "set": string,
  "set_name": string,
}