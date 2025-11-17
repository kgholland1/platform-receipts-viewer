import { ref } from "vue"
import { defineStore } from "pinia"
import { authApi } from "@/plugins/axios"
import type { CustomAxiosRequestConfig } from "@/plugins/axios";
import type { ApiResult } from "@/types/auth"


export const useReceiptStore  = defineStore("receipt", () => {

  const error = ref<Error | null>(null);

    const downloadReceipt = async (receiptNumber: string): Promise<ApiResult> => {
      try {
        error.value = null
        const response = await authApi.get(`/api/gcreceipts/platform/${receiptNumber}`,
          { showLoader: true, responseType: 'blob' } as CustomAxiosRequestConfig ) 


        console.log("RES", JSON.stringify(response))
        if (response.status === 200) {
        // Get the filename from Content-Disposition header if available
        const contentDisposition = response.headers['content-disposition']
        let filename = `receipt_${receiptNumber}.pdf`

        if (contentDisposition) {
          const filenameMatch = contentDisposition.match(/filename="?(.+)"?/i);
          if (filenameMatch && filenameMatch[1]) {
            filename = filenameMatch[1];
          }
        }
        const blob = new Blob([response.data], { type: 'application/pdf' });
        
        // Create temporary download link
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        
        // Cleanup
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

          return { success: true }
        }
          return { success: false }
      } catch (err) {
        // Handled by inteceptor
      error.value =
        err instanceof Error ? err : new Error("Failed to download receipt");
        console.log("error")
        return { success: false }
      }
    }

  return {
    error,
    downloadReceipt
  }
})
