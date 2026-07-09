export type SignUpResponse = {
  success: boolean,
  message: string,
  name: string,
  email: string,
  id: Object,
  accessToken: string,
}

export type LoginResponse = {
  success: boolean,
  message: string,
  name: string,
  email: string,
  id: Object,
  accessToken: string,
}

export type GetUserResponse = {
  success: boolean,
  name: string,
  email: string,
  id: Object,
  accessToken: string,
}