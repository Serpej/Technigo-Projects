import { fetchOtherUsersCards } from "../services/fetchOtherusersCardsService";
import type { OtherUsersCards } from "../types/responses";

export const handleGetOtherUsersCards = async (
 cardName: string
): Promise<OtherUsersCards[] | null> => {

  const result = await fetchOtherUsersCards(cardName);

  if(!result) {
    return null
  }

  return result
}