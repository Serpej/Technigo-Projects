export type UserAuth = {
  accessToken: string,
  setAccessToken: (token: string) =>  void,
  userName: string,
  setUserName: (name: string) => void,
  userEmail: string,
  setUserEmail: (email: string) => void
}

