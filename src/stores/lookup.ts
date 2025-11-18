import { ref } from "vue"
import { defineStore } from "pinia"
import { authApi } from "@/plugins/axios"
import type { CustomAxiosRequestConfig } from "@/plugins/axios";
import type { ApiResult } from "@/types/auth"
import type { AgencyLookup } from "@/types/receipt"


export const useLookupStore  = defineStore("lookup", () => {

  const error = ref<Error | null>(null);
  const agencyLookup = ref<AgencyLookup[]>([]);

    const getPlatformAgencies = async (): Promise<ApiResult> => {
      try {
        error.value = null
        const response = await authApi.get(`/api/system/platform/agencylookup`,
          { showLoader: true } as CustomAxiosRequestConfig ) 

        if (response.status === 200) {
          agencyLookup.value = response.data
          return { success: true }
        }
          return { success: false }
      } catch (err) {
      error.value =
        err instanceof Error ? err : new Error("Failed to load agency lookup");
        console.log(err)
        return { success: false }
      }
    }

  return {
    error,
    agencyLookup,
    getPlatformAgencies
  }
})
