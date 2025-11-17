import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoaderStore = defineStore('loader', () => {
  const activeRequests = ref(0)
  const isLoading = ref(false)
  let loaderTimer: ReturnType<typeof setTimeout> | null = null
  const delay = 200 // ms delay before showing loader

  function startRequest() {
    activeRequests.value++
    if (activeRequests.value === 1) {
      // Start delay before showing loader
      loaderTimer = setTimeout(() => {
        isLoading.value = true
      }, delay)
    }
  }

  function endRequest() {
    activeRequests.value = Math.max(0, activeRequests.value - 1)
    if (activeRequests.value === 0) {
      // Clear delay and hide loader
      if (loaderTimer) {
        clearTimeout(loaderTimer)
        loaderTimer = null
      }
      isLoading.value = false
    }
  }

  return { isLoading, startRequest, endRequest }
})