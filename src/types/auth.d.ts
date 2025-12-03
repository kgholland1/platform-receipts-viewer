export type UserCredentials = {
  email: string,
  password: string,
}

export type Profile = {
  fullName?: string,
  role: string,
}

export type ApiResult = {
  success: boolean
}

export type UserAgency = {
  name: string,
  ministry: string,
  emailAddress?: string,
  contactNumber?: string,
  prefix: string
}

export type ForgotPassword = {
  email: string
}

