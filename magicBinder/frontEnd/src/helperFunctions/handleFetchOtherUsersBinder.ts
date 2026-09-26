import { fetchOtherUsersBindersResponse } from "../services/fetchOtherUsersBinder";


export const handleFetchOtherUserBinder = async (
  binderId: string,
  accessToken: string,
 )=> {
  
  try {
    const result = await fetchOtherUsersBindersResponse(accessToken,binderId);

    if(!result) {
      return null
    }
    return result
  } catch (error) {

    if(!(error instanceof Error)) {
      return
    }
    console.error(error.message);
    
  }
}