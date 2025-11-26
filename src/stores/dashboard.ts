import { ref } from "vue"
import { defineStore } from "pinia"
import { authApi } from "@/plugins/axios"
import type { CustomAxiosRequestConfig } from "@/plugins/axios";
import type {
  DailyReceiptCount,
  WeeklyReceiptCount,
  AgencyReceiptCount,
} from "@/types/dashboard";
import type { Receipt } from "@/types/receipt"

const API_ENDPOINTS = {
  DAILY_TOTALS: "/api/platformreceipts/today-totals",
  WEEKLY_TOTALS: "/api/platformreceipts/week-totals",
  AGENCY_TOTALS: "/api/platformreceipts/agency-receipts-count",
  LATEST_RECEIPTS: "/api/platformreceipts/receipts?PageSize=20",
} as const;

export const useDashboardStore = defineStore("dashboard", () => {
  const dailyReceiptCount = ref<DailyReceiptCount | null>(null);
  const weeklyReceiptCount = ref<WeeklyReceiptCount | null>(null);
  const agencyReceiptCount = ref<AgencyReceiptCount[]>([]);
  const latestReceipts = ref<Receipt[]>([]);

  const error = ref<Error | null>(null);

  const resetDashboard = () => {
    dailyReceiptCount.value = null;
    weeklyReceiptCount.value = null;
    agencyReceiptCount.value = [];
    error.value = null;
  };

  const dashboardSummary = async (): Promise<void> => {
    error.value = null;

    try {
      const [dailyResponse, weeklyResponse, agencyResponse, latestResponse] =
        await Promise.all([
          authApi.get(API_ENDPOINTS.DAILY_TOTALS, {
            showLoader: true,
          } as CustomAxiosRequestConfig),
          authApi.get(API_ENDPOINTS.WEEKLY_TOTALS, {
            showLoader: true,
          } as CustomAxiosRequestConfig),
          authApi.get(API_ENDPOINTS.AGENCY_TOTALS, {
            showLoader: true,
          } as CustomAxiosRequestConfig),
          authApi.get(API_ENDPOINTS.LATEST_RECEIPTS, {
            showLoader: true,
          } as CustomAxiosRequestConfig),
        ]);

      dailyReceiptCount.value = dailyResponse.data;
      weeklyReceiptCount.value = weeklyResponse.data;
      agencyReceiptCount.value = agencyResponse.data;
      latestReceipts.value = latestResponse.data;

    } catch (err) {
      error.value =
        err instanceof Error ? err : new Error("Unknown error occurred");
    }
  };

  return {
    dailyReceiptCount,
    weeklyReceiptCount,
    agencyReceiptCount,
    latestReceipts,
    error,
    dashboardSummary,
    resetDashboard,
  };
});
