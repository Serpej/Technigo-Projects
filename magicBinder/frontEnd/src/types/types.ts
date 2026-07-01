export type UserAuth = {
  accessToken: string,
  setAccessToken: (token: string) =>  void,
  userName: string,
  setUserName: (name: string) => void,
  userEmail: string,
  setUserEmail: (email: string) => void,
  logOutUser: () => void,
}

export type ScryfallCard = {
  "scryfallId": string,
  "name": string,
  "image_uris": {
    "small": string,
    "normal": string,
    "large": string,
    "art_crop": string,
    "border_crop": string,
  },
  "userId": string
};