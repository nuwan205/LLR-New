// ** React Imports
import { createContext, ReactNode, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Config
import authConfig from 'src/configs/auth'

// ** Types
import { AuthValuesType, ErrCallbackType, LoginParams, ProfileResponse, UserDataType, VerifyEmailParams } from './types'
import { getItem, removeItem, setItem } from 'src/utils/localStorageHelper'
import { api } from 'src/utils/api'
import userStageRedirect from 'src/utils/userstageRedirect'

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  isLogging: false,
  setUser: () => null,
  setLoading: () => Boolean,
  setLogging: () => Boolean,
  isInitialized: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  setIsInitialized: () => Boolean,
  verifyEmail: () => Promise.resolve(),
  registerLandlord: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)
  const [isLogging, setLogging] = useState<boolean>(false)
  const [isInitialized, setIsInitialized] = useState<boolean>(defaultProvider.isInitialized)

  // ** Hooks
  const router = useRouter()

  useEffect(() => {

    const initAuth = async (): Promise<void> => {
      setIsInitialized(true)
      const storedToken = getItem(authConfig.storageTokenKeyName)!
      setLoading(true)
      if (storedToken) {
        try {
          const {
            data: { me, stage, isAdmin }
          } = await api.get<ProfileResponse>('/user/profile')
          setUser({ email: me.email, id: me.userId, stage, name: me.firstName, imageUrl: me.imageUrl, isAdmin })
          setItem('userData', JSON.stringify({ email: me.email, stage, isAdmin }))
          setLoading(false)
        } catch (error) {
          removeItem('userData')
          removeItem('refreshToken')
          removeItem('accessToken')
          setUser(null)
          setLoading(false)
        }
      } else {
        setLoading(false)
      }
    }
    initAuth()
  }, [])

  const handleLogin = (params: LoginParams, errorCallback?: ErrCallbackType) => {
    setLogging(true)
    api
      .post(authConfig.loginEndpoint, params)
      .then(async res => {
        setItem(authConfig.storageTokenKeyName, res.data.accessToken)
        setItem('refreshToken', res.data.refreshToken)
        const user = {
          email: res.data.profile.email,
          id: res.data.profile.id,
          stage: res.data.stage,
          isAdmin: res.data.isAdmin,
          name: res.data.profile.firstName,
          imageUrl: res.data.profile.imageUrl
        }
        setUser(user)
        setItem('userData', JSON.stringify({ email: params.email, stage: res.data.stage }))

        return user
      })
      .then(user => {
        userStageRedirect(user.stage, router)
      })
      .catch(err => {
        setLogging(false)
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = () => {
    setUser(null)
    setIsInitialized(false)
    removeItem('refreshToken')
    removeItem('userData')
    removeItem('landlord')
    removeItem('property')
    removeItem('accessToken')

    router.push('/')
  }

  const handleVerifyEmail = async (params: VerifyEmailParams, errorCallback?: ErrCallbackType) => {
    setLoading(true)
    await api
      .post('/email-verify', params)
      .then(() => {
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        if (errorCallback) errorCallback(err)
      })
  }

  // const handleRegisterLandlord = (params: RegisterLandlordParams, errorCallback?: ErrCallbackType) => {
  //   axios
  //     .post(authConfig.registerPaymentEndpoint, params)
  //     .catch((err: { [key: string]: string }) => (errorCallback ? errorCallback(err) : null))
  // }
  const registerLandlord = async () => {
    setLoading(true)

    setLoading(false)
  }

  const values = {
    user,
    loading,
    isLogging,
    setUser,
    setLoading,
    isInitialized,
    setIsInitialized,
    login: handleLogin,
    logout: handleLogout,
    verifyEmail: handleVerifyEmail,
    registerLandlord,
    setLogging
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
