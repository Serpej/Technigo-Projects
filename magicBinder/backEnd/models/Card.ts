import {Schema, model} from "mongoose";

export type ICard = {
  "id": string,
  "layout": string,
  "name": string,
  "type_line": string,
  "set_name": string,
  "game_changer": boolean,
  "foil": boolean,
  "nonfoil": boolean,
  "prints_search_uri": string,
  "purchase_uris": {
    "cardmarket": string
  }
};

export const cardBaseSchema = new Schema<ICard> ({
  id: {
    type: String,
    required: true
  },
  layout: {
    type: String,
    required:true
  },
  name: {
    type: String,
    required: true
  },
  type_line: {
    type: String,
    required: true
  },
  set_name: {
    type: String,
    required: true
  },
  game_changer: {
    type: Boolean,
    required: true
  },
  foil: {
    type: Boolean,
    required: true
  },
  nonfoil: {
    type: Boolean,
    required: true
  },
  prints_search_uri: {
    type: String,
    required: true
  },
  purchase_uris: {
    type: Object,
    required: true
  },
});

export type ISplitCardFace = {
  "name": string,
  "mana_cost": string,
  "type_line": string,
  "oracle_text": string,
  "power"?: string,
  "toughness"?: string,
}

const SplitCardFace = new Schema<ISplitCardFace>({
  name: {
    type: String, required: true 
  },
  mana_cost: {
    type: String,
    validate: {
      validator: (value: string) => typeof value === "string",
      message: "mana_cost must be a string"
    }
  },
  type_line: { 
    type: String, required: true 
  },
  oracle_text: {
    type: String,
    validate: {
      validator: (value: string) => typeof value === "string",
      message: "oracle_text must be a string"
    }
  },
  power: { 
    type: String, required: false 
  },
  toughness: { 
  type: String, required: false 
  },
})

export type ISplitFacedExtra = {
  "mana_cost": string,
  "image_uris": {
    "small": string,
    "normal": string,
    "large": string,
    "art_crop": string,
    "border_crop": string,
  },
  "card_faces": ISplitCardFace[],
}

const splitFacedExtra = new Schema<ISplitFacedExtra>({
  mana_cost: {
    type: String,
    validate: {
      validator: (value: string) => typeof value === "string",
      message: "mana_cost must be a string"
    }
  },
  image_uris: { 
    type: Object, required: true 
  },
  card_faces: {
    type: [SplitCardFace],
    required: true
  }
})

export type IReversibleCardFace = {
  "name": string,
  "layout": string,
  "type_line": string,
  "mana_cost": string,
  "oracle_text": string,
  "image_uris": {
    "small": string,
    "normal": string,
    "large": string,
    "art_crop": string,
    "border_crop": string,
  },
  "power"?: string,
  "toughness"?: string,
}

const ReversibleCardFace = new Schema<IReversibleCardFace>({
  name: { 
    type: String, 
    required: true 
  },
  layout: { 
    type: String, 
    required: true 
  },
  type_line: { 
    type: String, 
    required: true 
  },
  mana_cost: {
    type: String,
    validate: {
      validator: (value: string) => typeof value === "string",
      message: "mana_cost must be a string"
    }
  },
  oracle_text: {
    type: String,
    validate: {
      validator: (value: string) => typeof value === "string",
      message: "oracle_text must be a string"
    }
  },
  image_uris: { 
    type: Object, 
    required: true 
  },
  power: { 
    type: String, 
    required: false 
  },
  toughness: { 
    type: String, 
    required: false 
  },
})

export type IReversibleCardExtra = {
  "card_faces": IReversibleCardFace[],
}

const reversibleCardExtra = new Schema<IReversibleCardExtra>({
  card_faces: {
    type: [ReversibleCardFace],
    required: true
  }
})

export type ISingleFacedExtra = {
  "mana_cost": string,
  "oracle_text": string,
  "image_uris": {
    "small": string,
    "normal": string,
    "large": string,
    "art_crop": string,
    "border_crop": string,
  },
}

const singleFacedExtra = new Schema<ISingleFacedExtra> ({
  mana_cost: {
    type: String,
    validate: {
      validator: (value: string) => typeof value === "string",
      message: "mana_cost must be a string"
    }
  },
  oracle_text: {
    type: String,
    validate: {
      validator: (value: string) => typeof value === "string",
      message: "oracle_text must be a string"
    }
  },
  image_uris: {
    type: Object,
    required: true
  },
})

export type IScryfallCardFace = {
  "name": string,
  "mana_cost": string,
  "type_line": string,
  "oracle_text": string,
  "image_uris": {
    "small": string,
    "normal": string,
    "large": string,
    "art_crop": string,
    "border_crop": string,
  },
  "power"?: string,
  "toughness"?: string,
}

const ScryfallCardFace = new Schema<IScryfallCardFace> ({
  name: {
    type: String,
    required: true
  },
  mana_cost: {
    type: String,
    validate: {
      validator: (value: string) => typeof value === "string",
      message: "mana_cost must be a string"
    }
  },
  type_line: {
    type: String,
    required: true
  },
  oracle_text: {
    type: String,
    validate: {
      validator: (value: string) => typeof value === "string",
      message: "oracle_text must be a string"
    }
  },
  image_uris: {
    type: Object,
    required: true
  },
  power: {
    type: String,
    required: false
  },
  toughness: {
    type: String,
    required: false
  },
})

export type IDoubleFacedExtra = {
  "card_faces": IScryfallCardFace[],
}

const doubleFacedExtra = new Schema<IDoubleFacedExtra>({
  card_faces: {
    type: [ScryfallCardFace],
    required: true
  }
})

export const Card = model<ICard>("card", cardBaseSchema);

export const SplitFacedCard = Card.discriminator("SplitFacedCard", splitFacedExtra);

export const ReversibleCard = Card.discriminator("ReversibleCard", reversibleCardExtra);

export const SingleFacedCard = Card.discriminator("SingleFacedCard", singleFacedExtra);

export const DoubleFacedCard = Card.discriminator("DoubleFacedCard", doubleFacedExtra);