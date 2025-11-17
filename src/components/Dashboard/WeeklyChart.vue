<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-0"
      >
        <h3 class="fw-medium fs-18 mb-0">Receipts</h3>
        <ul
          class="ps-0 mb-0 list-unstyled d-flex week-list nav nav-pills"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link text-body rounded-0 active"
              id="pills-this-week-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-this-week"
              type="button"
              role="tab"
              aria-controls="pills-this-week"
              aria-selected="true"
            >
              This Week
            </button>
          </li>
        </ul>
      </div>

      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-this-week"
          role="tabpanel"
          aria-labelledby="pills-this-week-tab"
          tabindex="0"
        >
          <ThisWeekChart 
          :data="weeklyReceiptCount?.receiptCount"
          :categories="weeklyReceiptCount?.selectedDate"
          />
          <p class="mb-0 text-end text-dark">
            Total revenue:
            <span class="text-success">₵{{ totalRevenue.toFixed(2) }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDashboardStore } from '@/stores/dashboard'
import { computed } from "vue"
import { storeToRefs } from "pinia"
import ThisWeekChart from "./ThisWeekChart.vue"

const { weeklyReceiptCount } = storeToRefs(useDashboardStore())

console.log("weeklyReceiptCount", weeklyReceiptCount)

const totalRevenue = computed(() => 
  weeklyReceiptCount.value?.receiptTotal?.reduce((sum, total) => sum + total, 0) ?? 0
)
</script>