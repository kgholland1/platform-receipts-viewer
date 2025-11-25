import { ref } from "vue";
import { defineStore } from "pinia";
import { authApi } from "@/plugins/axios";
import type { CustomAxiosRequestConfig } from "@/plugins/axios";
import type { ApiResult } from "@/types/auth";
import type { Agency, APIKey } from "@/types/agency";

export const useAgencyStore = defineStore("agency", () => {
  const error = ref<Error | null>(null);
  const agencies = ref<Agency[]>([]);
  const apiKey = ref<APIKey | null>(null);

  const getAgenciesSettings = async (): Promise<ApiResult> => {
    try {
      error.value = null;
      const response = await authApi.get(
        `/api/platformreceipts/agency-additional-fields`,
        { showLoader: true } as CustomAxiosRequestConfig
      );

      if (response.status === 200) {
        agencies.value = response.data;
        return { success: true };
      }
      return { success: false };
    } catch (err) {
      error.value =
        err instanceof Error
          ? err
          : new Error("Failed to load agency settings");
      console.log(err);
      return { success: false };
    }
  };

  const fetchAPIKey = async (): Promise<ApiResult> => {
    try {
      error.value = null;
      const response = await authApi.get(`/api/agencies/APIkey`, {
        showLoader: true,
      } as CustomAxiosRequestConfig);

      if (response.status === 200) {
        apiKey.value = response.data;
        return { success: true };
      }
      return { success: false };
    } catch (err) {
      error.value =
        err instanceof Error ? err : new Error("Failed to load API Key");
      console.log(err);
      return { success: false };
    }
  };

  const generateAPIKey = async (): Promise<ApiResult> => {
    try {
      error.value = null;
      const response = await authApi.post(`/api/agencies/generateAPIkey`, {
        showLoader: true,
      } as CustomAxiosRequestConfig);

      if (response.status === 200) {
        apiKey.value = response.data;
        return { success: true };
      }
      return { success: false };
    } catch (err) {
      error.value =
        err instanceof Error ? err : new Error("Failed to load API Key");
      console.log(err);
      return { success: false };
    }
  };

  return {
    error,
    agencies,
    apiKey,
    getAgenciesSettings,
    fetchAPIKey,
    generateAPIKey
  };
});
