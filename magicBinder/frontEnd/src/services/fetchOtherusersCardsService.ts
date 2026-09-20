import type { OtherUsersCards } from "../types/responses";

const BASE_URL = `${import.meta.env.VITE_API_URL}`

export const fetchOtherUsersCards = async (
  cardName: string
) => {
  try {
    const result = await fetch(`${BASE_URL}/binders/otherUsers/${cardName}`);

    if (!result.ok) {
      const errorData = await result.json();
      throw new Error(errorData.message || `http error: ${errorData.status}` )
    }

    const arrayOfuserNameWithBinders: Array<OtherUsersCards> = await result.json();
    return arrayOfuserNameWithBinders

  } catch (error) {

    if(!(error instanceof Error)) {
      return
    }

    console.error(error.message);
  }
}