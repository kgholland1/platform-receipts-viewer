<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="card-title d-flex justify-content-between align-items-center mb-3">
        <h3 class="fw-medium fs-18 mb-0">Receipts Query Builder</h3>
      </div>
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <form>
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group mb-4">
                  <label class="label">Agency</label>
                  <select class="form-select form-control" aria-label="Default select example" v-model="filter.agencyId">
                    <option value="" selected>Select Agency</option>
                    <option v-for="option in agencyLookup" :key="option.id" :value="option.id">
                      {{ option.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group mb-4">
                  <label class="label">Receipt Number</label>
                  <input type="text" class="form-control" placeholder="Enter receipt number"
                    v-model="filter.receiptNumber" />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group mb-4">
                  <label class="label">Agency Reference</label>
                  <input type="text" class="form-control" placeholder="Enter reference"
                    v-model="filter.agencyReference" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group mb-4">
                  <label class="label">Start Date</label>
                  <input type="date" class="form-control" placeholder="Enter Start date" v-model="filter.startDate" />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group mb-4">
                  <label class="label">End Date</label>
                  <input type="date" class="form-control" placeholder="Enter End date" v-model="filter.endDate" />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group mb-4">
                  <label class="label">Page Size</label>
                  <select class="form-select form-control" aria-label="Default select example" v-model="filter.pageSize">
                    <option v-for="option in pageSizes" :key="option.value" :value="option.value">
                      {{ option.text }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="card-title d-flex justify-content-left align-items-center mb-3">
              <div class="form-group">
                <button class="btn btn-outline-primary rounded-pill ps-5" type="button" @click="onSearch">
                  <vue-feather type="search"
                    class="position-absolute top-50 start-0 translate-middle-y ms-2"></vue-feather>
                  Search
                </button>
                <button class="btn btn-outline-danger rounded-pill ms-2" type="button" @click="clearFilter">
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ReceiptList :filteredReceipts="allReceipts" @changeCurrentPage = "reload" />
      <MainFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import MainFooter from "../../components/Layouts/MainFooter.vue";
import ReceiptList from "@/components/Receipt/ReceiptList.vue";
import { useLookupStore } from '@/stores/lookup'
import { useReceiptStore } from "@/stores/receipt"
import type { QueryFilter } from "@/types/receipt"
import useSearch from "@/use/useSearch"
import { storeToRefs } from "pinia"


const { getPlatformAgencies } = useLookupStore()
const { agencyLookup } = storeToRefs(useLookupStore())

const { loadReceipts } = useReceiptStore()
const { allReceipts } = storeToRefs(useReceiptStore())
allReceipts.value = []

getPlatformAgencies()

const { formatQueryFilter } = useSearch()

let filter = reactive<QueryFilter>({
  agencyId: 0,
  receiptNumber: "",
  agencyReference: "",
  startDate: "",
  endDate: "",
  pageSize: 10,
  pageNumber: 1
})

const pageSizes = ref<{ value: number; text: string }[]>([
  { value: 10, text: '10' },
  { value: 20, text: '20' },
  { value: 30, text: '30' },
  { value: 40, text: '40' },
  { value: 50, text: '50' },
])

const clearFilter = () => {
  filter.agencyId = 0
  filter.receiptNumber = ""
  filter.agencyReference = ""
  filter.startDate = ""
  filter.endDate = ""
  filter.pageSize = 10
  filter.pageNumber = 1

  allReceipts.value = []
}

const onSearch = async () => {
  const queryString = formatQueryFilter(filter)

  await loadReceipts(queryString)
}

const reload = async (page: number) => {
  filter.pageNumber = page
  const queryString = formatQueryFilter(filter)

  await loadReceipts(queryString)
}

</script>