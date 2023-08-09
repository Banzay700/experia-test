export type LoginFormTypes = {
  email: string
  password: string
}

export type SignupFormTypes = {
  name?: string
  email: string
  password: string
}

export type CommonFormTypes = LoginFormTypes | SignupFormTypes
