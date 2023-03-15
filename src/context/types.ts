export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  email: string
  password: string
  token?: string
}

export type VerifyEmailParams = {
  id: string
  token: string
}

export type RegisterParams = {
  email: string
  name: string
  password: string
}

export type RegisterLandlordParams = {
  first_name: string
  last_name: string
  address: string
  email: string
  password: string
  confirmPassword: string
}

export type RegisterPaymentParams = {
  amount: string
}

export type UserDataType = {
  id: string
  email: string
  stage: string
  name: string
  imageUrl: string | null
  isAdmin: boolean
}

export interface Profile {
  userId: string
  firstName: string
  lastName?: string
  email: string
  phone?: string
  imageUrl: string | null
}

export interface UpdateUserResponse {
  userId: string
  firstName: string
  lastName?: string
  email: string
  phone?: string
  imageUrl: string | null
}

export interface ProfileResponse {
  me: Profile
  stage: string
  isAdmin: boolean
}

export interface LoginResponse {
  accessToken: string
  refreshToken: string
  profile: Profile
  stage: string
}

export interface SocialLoginResponse {
  id: string
  email: string
  stage: string
  firstName: string
  isVerified: boolean
  providerType: string
  accessToken: null | string
  refreshToken: null | string
}

export type AuthValuesType = {
  loading: boolean
  isLogging: boolean
  setLoading: (value: boolean) => void
  setLogging: (value: boolean) => void
  logout: () => void
  isInitialized: boolean
  user: UserDataType | null
  setUser: (value: UserDataType | null) => void
  setIsInitialized: (value: boolean) => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
  verifyEmail: (params: VerifyEmailParams, errorCallback?: ErrCallbackType) => void
  registerLandlord: () => void
}

export interface Address {
  address1: string
  address2: string
  city: string
  postCode: string
}

export interface TenantAddress extends Address {
  currentAddress: boolean
}

export interface LandlordFormData {
  title: string
  firstName: string
  lastName: string
  email: string
  phone: string
  ownership: boolean
  registeredAddress: Address
  tradingAddress: Address
}

export interface PropertyFormData {
  houseName: string
  houseNumber: string
  bath: number
  bed: number
  address: Address
}

export interface gurantorFormData {
  title: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address: Address
}
export interface TenantFormData {
  title: string
  firstName: string
  lastName: string
  email: string
  phone: string
  birthDate: string
  isGuarantorRequired: boolean
  addresses: TenantAddress[]
  guarantorDetails: gurantorFormData
}

export interface TenantResponse {
  id: string
  title: string
  firstName: string
  lastName?: string | null
  email: string
  phone: string
  birthDate: string
  addresses: {
    address1: string
    address2: string
    city: string
    postCode: string
  }[]
  isGuarantorRequired: boolean
  isCreditChecked: boolean
  isCreditPending: boolean
  score: number
  pdf?: string
}

export interface LandlordResponseType {
  userId: string
  email: string
  title: string
  firstName: string
  lastName?: string
  ownership?: string
  phone?: string
  tradingAddressLine1: string
  tradingAddressLine2?: string
  tradingAddressCity: string
  tradingAddressPostCode: string
  registeredAddressLine1?: string
  registeredAddressLine2?: string
  registeredAddressCity?: string
  registeredAddressPostCode?: string
}

export interface PropertyResponseType {
  id: string
  address1: string
  address2?: string
  city: string
  postCode: string
  createdAt: string
  updatedAt: string
}
