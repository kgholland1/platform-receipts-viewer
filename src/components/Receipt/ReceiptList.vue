<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div v-if="!!filteredReceipts.length" class="card-title d-flex justify-content-between align-items-center mb-5">
        <h3 class="fw-medium fs-20 mb-0">Receipts</h3>
        <div>
          <button class="btn btn-secondary rounded-pill ps-5" type="button" @click="onExport">
            <vue-feather type="file-text" class="position-absolute top-50 start-0 translate-middle-y ms-2"></vue-feather>
            Export
          </button>
        </div>
      </div>

      <div v-if="!!filteredReceipts.length" class="all-table scroll-bar h-624">
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
            <tr v-for="doc in filteredReceipts" :key="doc.id">
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
                      <a class="dropdown-item d-flex align-items-center" href="javascript:;" @click="viewReceipt(doc.id)">
                        <vue-feather type="eye"></vue-feather>
                        View
                      </a>
                    </li>
                    <li v-if="isSuperAdmin">
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
        <!-- Pagination -->
        <div class="col-lg-12 col-sm-12 mt-4">
          <div class="card-title d-flex justify-content-between align-items-center mb-3">
            <!-- Results count -->
            <div class="mb-2 text-muted">
              Showing {{ (pagination.currentPage - 1) * pagination.itemsPerPage + 1 }}
              to {{ Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems) }}
              of {{ pagination.totalItems }} results
            </div>

            <!-- Pagination controls -->
            <nav aria-label="Page navigation">
              <ul class="pagination">
                <!-- Previous button -->
                <li class="page-item" :class="{ disabled: pagination.currentPage === 1 }">
                  <button class="page-link" @click="changePage(pagination.currentPage - 1)"
                    :disabled="pagination.currentPage === 1" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>

                <!-- First page -->
                <li class="page-item" :class="{ active: pagination.currentPage === 1 }">
                  <button class="page-link" @click="changePage(1)">1</button>
                </li>

                <!-- Ellipsis before current page -->
                <li class="page-item disabled" v-if="pagination.currentPage > 3">
                  <span class="page-link">...</span>
                </li>

                <!-- Pages around current page -->
                <li class="page-item" v-for="page in getPageRange()" :key="page"
                  :class="{ active: pagination.currentPage === page }">
                  <button class="page-link" @click="changePage(page)">{{ page }}</button>
                </li>

                <!-- Ellipsis after current page -->
                <li class="page-item disabled" v-if="pagination.currentPage < pagination.totalPages - 2">
                  <span class="page-link">...</span>
                </li>

                <!-- Last page -->
                <li class="page-item" :class="{ active: pagination.currentPage === pagination.totalPages }"
                  v-if="pagination.totalPages > 1">
                  <button class="page-link" @click="changePage(pagination.totalPages)">
                    {{ pagination.totalPages }}
                  </button>
                </li>

                <!-- Next button -->
                <li class="page-item" :class="{ disabled: pagination.currentPage === pagination.totalPages }">
                  <button class="page-link" @click="changePage(pagination.currentPage + 1)"
                    :disabled="pagination.currentPage === pagination.totalPages" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div v-else class="d-flex justify-content-center align-items-center" style="height: 30vh;">
        <h6>No receipts to display.</h6>
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
import { useReceiptStore } from '@/stores/receipt'
import { formatDate } from "@/utils/helper"
import { useAuthStore } from '@/stores/auth'
import ReceiptDetail from "@/components/Receipt/ReceiptDetail.vue"
import type { Receipt } from "@/types/receipt"
import type { ApiResult } from "@/types/auth"
import Swal from "sweetalert2"
import 'sweetalert2/src/sweetalert2.scss'
import { Offcanvas } from "bootstrap"
import { storeToRefs } from "pinia"
import ExcellentExport from "excellentexport"

const props = defineProps<{
  filteredReceipts: Receipt[]
}>()

const emit = defineEmits(["changeCurrentPage"])

const { downloadReceipt } = useReceiptStore()
const { pagination } = storeToRefs(useReceiptStore())
const { isSuperAdmin } = storeToRefs(useAuthStore())

const receiptData = ref<Receipt | null>(null)

const changePage = (page: number) => {
  if (page >= 1 && page <= pagination.value.totalPages) {
    pagination.value.currentPage = page;

    emit("changeCurrentPage", page)
  }
}

const getPageRange = () => {
  const current = pagination.value.currentPage;
  const total = pagination.value.totalPages;
  const pages = [];

  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    if (i !== 1 && i !== total) {
      pages.push(i);
    }
  }

  return pages;
}

const viewReceipt = (receiptId: number) => {
  receiptData.value = props.filteredReceipts.find((receipt) => receipt.id === receiptId) ?? null

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

const generateFilename = (): string => {
  const now = new Date();
  const formatted =
    now.toISOString().replace(/[:.-]/g, ""); 

  return `receipts_${formatted}`;
}

const onExport = () => {
  const fileName = generateFilename()

  if (props.filteredReceipts.length === 0) {
    console.warn('No receipts to export');
    return;
  }

  const fieldMapping: { header: string; key: keyof Receipt }[] = [
    { header: 'Date', key: 'receiptDate' },
    { header: 'Agency', key: 'agencyName' },
    { header: 'Receipt Number', key: 'receiptNumber' },
    { header: 'Agency Reference', key: 'agencyUniqueReference' },
    { header: 'Name', key: 'recipientName' },
    { header: 'Email', key: 'recipientEmail' },
    { header: 'Phone', key: 'recipientPhone' },
    { header: 'Amount', key: 'amount' },
    { header: 'Fee', key: 'fee' }        
  ];

  const headers = fieldMapping.map(field => field.header);

  const data = [
    headers,
    ...props.filteredReceipts.map(receipt => 
      fieldMapping.map(field => {
        const value = receipt[field.key];
        return value !== null && value !== undefined ? String(value) : '';
      })
    )
  ];

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Receipts are exported successfully',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })


  return ExcellentExport.convert(
    {
      openAsDownload: true,
      filename: fileName,
      format: "csv"
    },
    [
      {
        name: "Receipts",
        from: {
          array: data
        },
        removeColumns: [0]
      }
    ]
  );
};

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