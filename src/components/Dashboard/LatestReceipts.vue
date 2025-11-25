<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div class="card-title d-flex justify-content-between align-items-center mb-3">
        <h3 class="fw-medium fs-18 mb-0">Recent Receipts</h3>
      </div>

      <div v-if="!!latestReceipts.length" class="all-table scroll-bar h-524">
        <table class="table align-middle mb-0">
          <thead>
            <tr>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14 ps-0" scope="col">
                Agency
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Receipt Number
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Created
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Name
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Amount
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Fee
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col"></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="doc in latestReceipts" :key="doc.id">
              <td class="ps-0">
                <span class="text-start text-dark">{{ doc.agencyName }}</span>
              </td>
              <td>
                <span class="d-block text-dark">{{ doc.receiptNumber }}</span>
              </td>
              <td>
                <span class="d-block text-dark">{{ formatDate(doc.receiptDate) }}</span>
              </td>
              <td>
                <span class="d-block text-dark">{{ doc.recipientName }}</span>
              </td>
              <td>
                <span class="d-block text-dark">₵{{ doc.amount.toFixed(2) }}</span>
              </td>
              <td>
                <span class="d-block text-dark">₵{{ doc.fee.toFixed(2) }}</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button class="btn bg-transparent p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item d-flex align-items-center"  href="javascript:;" @click="viewReceipt(doc.id)">
                        <vue-feather type="eye"></vue-feather>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:;" @click="download(doc.receiptNumber)">
                        <vue-feather type="printer"></vue-feather>
                        Download
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="d-flex justify-content-center align-items-center" style="height: 20vh;">
        <h6>Receipts have not been requested yet.</h6>
      </div>


      <!-- Start Default Offcanvas From Area -->
      <div class="offcanvas offcanvas-custom offcanvas-end" tabindex="-1" id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header border-bottom">
          <h5 class="offcanvas-title fs-18" id="offcanvasRightLabel">
            {{ receiptData?.receiptNumber }}
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">
          <ReceiptDetail v-if="receiptData" :receipt-data="receiptData" />
        </div>
      </div>
      <!-- End Default Offcanvas From Area -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import { useDashboardStore } from '@/stores/dashboard'
import { useReceiptStore } from '@/stores/receipt'
import { storeToRefs } from "pinia"
import { formatDate } from "@/utils/helper"
import ReceiptDetail from "@/components/Receipt/ReceiptDetail.vue"
import type { Receipt } from "@/types/receipt"
import type { ApiResult } from "@/types/auth"
import Swal from "sweetalert2"
import 'sweetalert2/src/sweetalert2.scss'

import { Offcanvas } from "bootstrap"

const { latestReceipts } = storeToRefs(useDashboardStore())
const { downloadReceipt } = useReceiptStore()

const receiptData = ref<Receipt | null>(null)

const viewReceipt = (receiptId: number) => {
  receiptData.value = latestReceipts.value.find((receipt) => receipt.id === receiptId) ?? null

  const offcanvasElement = document.getElementById('offcanvasRight')
  if (offcanvasElement) {
    const offcanvas = new Offcanvas(offcanvasElement)
    offcanvas.show()
  }
}

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
.offcanvas-custom {
  width: 600px !important;
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