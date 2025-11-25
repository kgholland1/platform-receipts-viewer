<template>
  <div class="card">
    <div class="card-header">
      <h5 class="mb-0">Receipt Details</h5>
    </div>
    <div class="card-body p-0">
      <table class="table table-bordered mb-0">
        <tbody>
          <tr>
            <td class="fw-bold bg-light" style="width: 40%;">Receipt Number</td>
            <td>{{ receiptData.receiptNumber }}</td>
          </tr>
          <tr>
            <td class="fw-bold bg-light">Agency Reference</td>
            <td>{{ receiptData.agencyUniqueReference }}</td>
          </tr>
          <tr>
            <td class="fw-bold bg-light">Recipient Name</td>
            <td>{{ receiptData.recipientName }}</td>
          </tr>
          <tr v-if="receiptData.recipientEmail">
            <td class="fw-bold bg-light">Recipient Email</td>
            <td>{{ receiptData.recipientEmail }}</td>
          </tr>
          <tr v-if="receiptData.recipientPhone">
            <td class="fw-bold bg-light">Recipient Phone</td>
            <td>{{ receiptData.recipientPhone }}</td>
          </tr>
          <tr>
            <td class="fw-bold bg-light">Amount</td>
            <td>₵{{ receiptData.amount }}</td>
          </tr>
          <tr>
            <td class="fw-bold bg-light">Fee</td>
            <td>₵{{ receiptData.fee.toFixed(2) }}</td>
          </tr>
          <tr>
            <td class="fw-bold bg-light">Agency Name</td>
            <td>{{ receiptData.agencyName }}</td>
          </tr>
          <tr>
            <td class="fw-bold bg-light">Receipt Type</td>
            <td>{{ receiptData.receiptType }}</td>
          </tr>
          <tr>
            <td class="fw-bold bg-light">Receipt Date</td>
            <td>{{ formatDate(receiptData.receiptDate) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="form-group my-4">
    <button type="submit" class="default-btn w-100 d-block" @click="download(receiptData.receiptNumber)">
      Download Receipt
    </button>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import type { Receipt } from "@/types/receipt"
import { useReceiptStore } from '@/stores/receipt'
import type { ApiResult } from "@/types/auth"
import Swal from "sweetalert2"
import 'sweetalert2/src/sweetalert2.scss'

defineProps<{
  receiptData: Receipt
}>()

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

const { downloadReceipt } = useReceiptStore()

const download = async (receiptNumber: string) => {
  const response: ApiResult = await downloadReceipt(receiptNumber)

  if (response.success) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Receipt is downloaded successfully',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })
  }
}

</script>
<style scoped>
.table td {
  padding: 0.75rem;
  vertical-align: middle;
}

.fw-bold {
  font-weight: 600;
}

.swal2-toast {
  padding: 0.75rem 1rem !important;
  font-size: 0.85rem !important;
  border-radius: 12px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  max-width: 280px !important;
}

/* Icon spacing */
.swal2-toast .swal2-icon {
  margin: 0 0.5rem 0 0 !important;
  width: 1.25rem !important;
  height: 1.25rem !important;
}

/* Title text */
.swal2-toast .swal2-title {
  font-weight: 500 !important;
  font-size: 0.9rem !important;
  color: #333 !important;
  margin: 0 !important;
}

/* Progress bar (modern slim style) */
.swal2-timer-progress-bar {
  background: linear-gradient(90deg, #10b981, #3b82f6) !important;
  height: 3px !important;
  border-radius: 2px;
}
</style>
