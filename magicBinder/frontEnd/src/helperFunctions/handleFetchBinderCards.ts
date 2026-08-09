import { fetchBinderCardSummaryService } from "../services/fetchBinderCardSummaryService";

export const handleFetchBinderCards = async (
  binderName: string,
  accesstoken: string
) => {
    const cardSummariesFromBinder = await fetchBinderCardSummaryService(binderName, accesstoken);


}