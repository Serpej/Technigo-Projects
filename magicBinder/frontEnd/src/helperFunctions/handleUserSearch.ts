import { fetchOtherUsers } from "../services/fetchOtherUsersService";

export const handleUserSearch = async (
  query: string,
) => {

  const result = await fetchOtherUsers(query);

  return result;

  };