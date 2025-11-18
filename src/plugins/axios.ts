import axios, { AxiosInstance, InternalAxiosRequestConfig  } from 'axios'
import { useAuthStore } from '@/stores/auth'
import { useLoaderStore } from '@/stores/loader'


export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  showLoader?: boolean;
  responseType?: InternalAxiosRequestConfig['responseType']; 
}

// Helper function to create configured instance
const createAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    timeout: 10000,
  })

  // Add request interceptor
  instance.interceptors.request.use(
    (config: CustomAxiosRequestConfig) => {
      const loaderStore = useLoaderStore()
      const authStore = useAuthStore()

      if (authStore.token) {
        config.headers.Authorization = `Bearer ${authStore.token}`
      }
      if (config.showLoader !== false) {
        loaderStore.startRequest()
      }
      return config
    },
    (error) => {
      const loaderStore = useLoaderStore()
      loaderStore.endRequest()
      return Promise.reject(error)
    }
  )

  // Add response interceptor
  instance.interceptors.response.use(
    (response) => {
      const loaderStore = useLoaderStore()
      if ((response.config as CustomAxiosRequestConfig).showLoader !== false) {
        loaderStore.endRequest()
      }
      return response
    },
    (error) => {
      const loaderStore = useLoaderStore()
      const authStore = useAuthStore()

      if ((error.config as CustomAxiosRequestConfig)?.showLoader !== false) {
        loaderStore.endRequest()
      }
      if (error.response?.status === 401) {
        authStore.clearToken()
        window.location.replace('/')
      }
      return Promise.reject(error)
    }
  )

  return instance
}

export const authApi = createAxiosInstance('http://localhost:51044')
export const mdaApi = createAxiosInstance('http://localhost:51045')

export default authApi