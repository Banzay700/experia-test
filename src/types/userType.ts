export type UserType = {
  name?: string
  email: string
  password: string
}

export type UserLoginResponseType = {
  token: string
  message: UserType
}

export type UserLoginRequestType = {
  email: string
  password: string
}
