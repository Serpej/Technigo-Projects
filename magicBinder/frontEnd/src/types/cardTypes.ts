import type { Location } from "react-router-dom";

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
  "set_name": string,
  "set_id": string,
  "layout": string
  "prices": {
    "eur": string,
    "eur_foil": string,
  },
  "game_changer": boolean,
  "foil": boolean,
  "nonfoil": boolean,
  "prints_search_uri": string,
  "legalities": Legalities,
  "purchase_uris": {
    "cardmarket": string
  }
  "userId": string
}

type ScryfallCardWithTypeLine = ScryfallCardBase & {
  "type_line": string,
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

export type ScryfallSplitCardFace = {
  "name": string,
  "mana_cost": string,
  "type_line": string,
  "oracle_text": string,
  "power"?: string,
  "toughness"?: string,
}

export type ScryfallReversibleCardFace = {
  "name": string,
  "layout": string,
  "type_line": string,
  "mana_cost": string,
  "oracle_text": string,
  "image_uris": ImageUris,
  "power"?: string,
  "toughness"?: string,
}

export type ScryfallSingleFacedCard = ScryfallCardWithTypeLine & {
  "mana_cost": string,
  "oracle_text": string,
  "image_uris": ImageUris,
}

export type PopulatedSingleFacedCard = ScryfallSingleFacedCard & {
  "__t": "SingleFacedCard"
}

export type ScryfallDoubleFacedCard = ScryfallCardWithTypeLine & {
  "card_faces": ScryfallCardFace[],
}

export type PopulatedDoubleFacedCard = ScryfallDoubleFacedCard & {
  "__t": "DoubleFacedCard"
}

export type ScryfallSplitFacedCard = ScryfallCardWithTypeLine & {
  "mana_cost": string,
  "image_uris": ImageUris,
  "card_faces": ScryfallSplitCardFace[],
}

export type PopulatedScryfallSplitFacedCard = ScryfallSplitFacedCard & {
  "__t": "SplitFacedCard"
}

export type ScryfallReversibleCard = ScryfallCardBase & {
  "card_faces": ScryfallReversibleCardFace[],
}


export type PopulatedReversibleCard = ScryfallReversibleCard & {
  "__t": "ReversibleCard"
}

export type ScryfallCard = 
  | ScryfallSingleFacedCard 
  | ScryfallDoubleFacedCard
  | ScryfallSplitFacedCard
  | ScryfallReversibleCard;

export type PopulatedScryfallCard = 
  (
    | PopulatedSingleFacedCard
    | PopulatedDoubleFacedCard
    | PopulatedScryfallSplitFacedCard
    | PopulatedReversibleCard
  )
  & { "_id": string };

export type ScryFallSearchResponse = {
  "has_more": boolean,
  "next_page"?: string,
  "data": ScryfallCard[],
}

export type UserChoices = {
  condition: string,
  amount: number,
}

export type FullUserCard = PopulatedScryfallCard & UserChoices

export type ScryfallSearchSuccess = ScryFallSearchResponse & {
  "found": true;
}

export type ScryfallSearchEmpty = {
  "found": false;
  "message": string;
}

export type ScryfallSearchResult = ScryfallSearchSuccess | ScryfallSearchEmpty;

export type ScryfallCalledState = {
  "background" : Location,
  "card": ScryfallCard,
  "source": "search"
}

export type BackendCalledState = {
  "background" : Location,
  "card": FullUserCard,
  "source": "binder",
}

export type CardDetailsState = ScryfallCalledState | BackendCalledState;

