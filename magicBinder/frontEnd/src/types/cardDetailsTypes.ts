import type { ScryfallCard } from "../types/cardTypes";

export type CardSearchFormProps = {
  handleOnChangePrint: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  prints: ScryfallCard[],
  binderName: string,
  handleOnChangeCondition: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  handleOnChangeAmount: (e: React.ChangeEvent<HTMLInputElement>) => void,
  amount: number 
}

