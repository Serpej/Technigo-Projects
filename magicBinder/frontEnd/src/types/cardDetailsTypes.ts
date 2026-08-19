import type { ScryfallCard } from "../types/cardTypes";
import type { cardBinderSummary } from "../types/binderTypes";

export type CardSearchFormProps = {
  handleOnChangePrint: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  prints: ScryfallCard[],
  binderName: string,
  handleOnChangeCondition: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  handleOnChangeAmount: (e: React.ChangeEvent<HTMLInputElement>) => void,
  amount: number 
}

export type CardSearchAddButtonProps = {
  binderName: string,
  cardId: string,
  condition: string,
  amount: number,
  accessToken: string,
  setMessage: (message:string) => void,
  binders: cardBinderSummary[]
}

