import { fetchOtherUsersBinders } from "../services/fetchOtherUsersBinders";


export const handleOtherUsersBinders = async(
  accessToken: string,
  otherUser_Id: string
) => {

  const result = await fetchOtherUsersBinders(accessToken, otherUser_Id);

  if(!result) {
    return null
  }

  return result;
}