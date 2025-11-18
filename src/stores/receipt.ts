import { ref } from "vue";
import { defineStore } from "pinia";
import { authApi } from "@/plugins/axios";
import type { CustomAxiosRequestConfig } from "@/plugins/axios";
import type { ApiResult } from "@/types/auth";
import type { Receipt, PaginationMetadata } from "@/types/receipt";

export const useReceiptStore = defineStore("receipt", () => {
  const error = ref<Error | null>(null);
  const allReceipts = ref<Receipt[]>([]);
  const pagination = ref<PaginationMetadata>({
    currentPage: 1,
    itemsPerPage: 2,
    totalItems: 0,
    totalPages: 0,
  });

  const downloadReceipt = async (receiptNumber: string): Promise<ApiResult> => {
    try {
      error.value = null;
      const response = await authApi.get(
        `/api/gcreceipts/platform/${receiptNumber}`,
        { showLoader: true, responseType: "blob" } as CustomAxiosRequestConfig
      );

      if (response.status === 200) {
        // Get the filename from Content-Disposition header if available
        const contentDisposition = response.headers["content-disposition"];
        let filename = `receipt_${receiptNumber}.pdf`;

        if (contentDisposition) {
          const filenameMatch = contentDisposition.match(/filename="?(.+)"?/i);
          if (filenameMatch && filenameMatch[1]) {
            filename = filenameMatch[1];
          }
        }
        const blob = new Blob([response.data], { type: "application/pdf" });

        // Create temporary download link
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;

        // Trigger download
        document.body.appendChild(link);
        link.click();

        // Cleanup
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        return { success: true };
      }
      return { success: false };
    } catch (err) {
      // Handled by inteceptor
      error.value =
        err instanceof Error ? err : new Error("Failed to download receipt");
      console.log(err);
      return { success: false };
    }
  };

  const loadReceipts = async (queryString: string): Promise<ApiResult> => {
    try {
      error.value = null;
      const response = await authApi.get(
        `/api/platformreceipts/receipts${queryString}`,
        { showLoader: true } as CustomAxiosRequestConfig
      );

      if (response.status === 200) {
        allReceipts.value = response.data;

        const paginationHeader =
          response.headers["pagination"] || response.headers["Pagination"];

        if (paginationHeader) {
          const paginationData: PaginationMetadata =
            JSON.parse(paginationHeader);

          pagination.value = paginationData;
        }
        console.log("pagination", JSON.stringify(pagination.value))
        return { success: true };
      }
      return { success: false };
    } catch (err) {
      // Handled by inteceptor
      error.value =
        err instanceof Error ? err : new Error("Failed to download receipt");
      console.log(err);
      return { success: false };
    }
  };

  return {
    error,
    allReceipts,
    pagination,
    downloadReceipt,
    loadReceipts,
  };
});
