export type PostCardResponse = {
  success: boolean,
  message: string,
  name: string,
  id: string,
  _id: string
}

export type AddCardToBinder = {
  success: boolean,
  message: string,
  binderName: string,
  card_id: string
}

export type DeleteCardFromBinder = {
  success: boolean,
  message: string,
  cardId: string,
}

export type DeleteBinder = {
  success: true,
  message: string,
  binderName: string
}
export type UpdateBinder = {
  success: true,
  message: string,
  binderName: string,
  binderImage: string,
}