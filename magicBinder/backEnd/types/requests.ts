import { ICard, ISingleFacedExtra, IDoubleFacedExtra, IReversibleCardExtra, ISplitFacedExtra } from "../models/Card";

export type SplitFacedCardData = ICard & ISplitFacedExtra & {
  layout: "split" | "flip" | "adventure" | "prepare"
};

export type SingleFacedCardData = ICard & ISingleFacedExtra & {
  layout: "normal" | "meld" | "leveler" | "saga" | "class" | "case" | "mutate" | "prototype"
};

export type DoubleFacedCardData = ICard & IDoubleFacedExtra & {
  layout: "transform" | "modal_dfc"
};

export type ReversibleCardData = ICard & IReversibleCardExtra & {
  layout: "reversible_card"
};

export type CardRequestBody = SingleFacedCardData | DoubleFacedCardData | ReversibleCardData | SplitFacedCardData;
