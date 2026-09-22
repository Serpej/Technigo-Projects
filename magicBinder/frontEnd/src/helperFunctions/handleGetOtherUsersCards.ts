import { fetchOtherUsersCards } from "../services/fetchOtherusersCardsService";
import type { OtherUsersCards } from "../types/responses";

export const handleGetOtherUsersCards = async (
 cardName: string
): Promise<OtherUsersCards[] | null> => {

  const encodedCardName = encodeURIComponent(cardName);
  const result = await fetchOtherUsersCards(encodedCardName);

  if(!result) {
    return null
  }

  return result
}