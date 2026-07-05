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

export type ScryfallCard = {
  "scryfallId": string,
  "name": string,
  "mana_cost": string,
  "type_line": string,
  "oracle_text": string,
  "eur": string,
  "eur_foil": string,
  "game_changer": boolean,
  "foil": boolean,
  "nonfoil": boolean,
  "image_uris": {
    "small": string,
    "normal": string,
    "large": string,
    "art_crop": string,
    "border_crop": string,
  },
  "legalities": {
    "standard": string,
    "pioneer": string,
    "modern": string,
    "legacy": string,
    "pauper": string,
    "commander": string,
  },
  "userId": string
};

export type ScryFallSearchResponse = {
  "has_more": boolean,
  "next_page"?: string,
  "data": ScryfallCard[],
}
export type CardDetailsState = {
  background : Location,
  card: ScryfallCard,
}