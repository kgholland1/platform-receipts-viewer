import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ApiResult, UserCredentials, Profile } from "@/types/auth"
import type { CustomAxiosRequestConfig } from '@/plugins/axios'
import { authApi } from '@/plugins/axios'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null)
  const isAuthenticated = ref<boolean>(false)
  const headerProfile = ref<Profile>({ fullName: "",
  role: "Admin",
} )
const error = ref<string | null>(null)

  const initAuth = () => {
    const storedToken = localStorage.getItem('gcr-token')
    const storedAuth = localStorage.getItem('gcr-userId')
    const storedProfile = localStorage.getItem('gcr-profile')
    
    if (storedToken && storedAuth && storedProfile) {
      token.value = storedToken
      isAuthenticated.value = JSON.parse(storedAuth)
      headerProfile.value = JSON.parse(storedProfile) as Profile
    }
  }

 const setToken = (newToken: string) => {
    token.value = newToken
    isAuthenticated.value = true
    localStorage.setItem('gcr-token', newToken)
    localStorage.setItem('gcr-userId', JSON.stringify(true))
    localStorage.setItem('gcr-profile', JSON.stringify(headerProfile.value))
  }

  const clearToken = () => {
    token.value = null
    isAuthenticated.value = false
    localStorage.removeItem('gcr-token')
    localStorage.removeItem('gcr-userId')
    localStorage.removeItem('gcr-profile')
  }

  const signIn = async (loginDetails: UserCredentials): Promise<ApiResult> => {
    try {
      error.value = null
      const response = await authApi.post('/api/auth/clientlogin', loginDetails, { showLoader: false } as CustomAxiosRequestConfig ) 
      console.log("RES", JSON.stringify(response))
      if (response.status === 200) {
        headerProfile.value.fullName = response.data.user.fullName
        headerProfile.value.role = response.data.user.role[0]
        setToken(response.data.token)

        return { success: true }
      }
        return { success: false }
    } catch {
      // Handled by inteceptor
      error.value = "Incorrect Email or Password"
      console.log("error")
      return { success: false }
    }
  }

    return {
    token,
    isAuthenticated,
    headerProfile,
    error,
    initAuth,
    setToken,
    clearToken,
    signIn
  }
})