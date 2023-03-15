import axios, { AxiosError } from 'axios'
import { getItem, setItem } from './localStorageHelper'

type TokenTypes = {
  accessToken: string
  refreshToken: string
}

const api = axios.create()

api.defaults.baseURL = process.env.NEXT_PUBLIC_BACK_END_API

const refreshAccessToken = async () => {
  try {
    const refreshToken = getItem('refreshToken') || null
    if (!refreshToken) throw 'refresh token not found'

    const tokens = await api.post<TokenTypes>('/refresh-token', { token: refreshToken })

    return tokens
  } catch (err) {
    throw 'invalid token'
  }
}
api.interceptors.request.use(
  function (config) {
    const token = getItem('accessToken') || null

    config.headers = {
      Authorization: token ? `Bearer ${token}` : '',
      Accept: 'application/json',
      ...config.headers
    }

    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error) {
    // check Unauthorized errors and refresh token
    const originalRequest = error.config
    if (error?.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const tokens = await refreshAccessToken()
        if (tokens) {
          setItem('accessToken', tokens.data.accessToken)
          setItem('refreshToken', tokens.data.refreshToken)
          originalRequest.headers.Authorization = 'Bearer ' + tokens?.data.accessToken
        }

        return api(originalRequest)
      } catch (err) {
        localStorage.clear()
        window.location.replace('/')
        throw error.response
      }
      localStorage.clear()
      throw error.response
    }

    throw handleErrors(error)
  }
)

const handleErrors = (err: AxiosError) => {
  if (err.response) {
    return err.response.data
  } else if (err.request) {
    return err.request
  } else {
    console.log('Error', err)

    return err.message
  }
}

export { api }
