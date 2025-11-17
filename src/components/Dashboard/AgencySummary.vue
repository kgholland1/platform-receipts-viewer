<template>
  <div
    class="card border-0 box-shadow border-radius-10 mb-4 transaction browser-stats"
    style="height: 32vh;"
  >
    <div class="card-body p-4 mb-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-4"
      >
        <h3 class="fw-medium fs-18 mb-0">Agency Stats</h3>
      </div>

      <ul  v-if="!!agencyReceiptCount.length" class="ps-0 mb-0 list-unstyled scroll-bar h-608">
        <li
          class="d-flex align-items-center justify-content-between border-bottom border-color pb-3 mb-3"
          v-for="agency in agencyReceiptCount"
          :key="agency.agencyName"
        >
          <div class="d-flex align-items-center">
            <h4 class="ms-3 fs-14 fw-medium text-body mb-0">
              {{ agency.agencyName }}
            </h4>
          </div>
          <span class="fw-medium fs-14 text-body">{{ agency.receiptCount }}</span>
        </li>
      </ul>
      <div v-else class="d-flex justify-content-center align-items-center" style="height: 20vh;">
        <h6>Receipts have not been requested yet.</h6>
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">
import { useDashboardStore } from '@/stores/dashboard'
import { storeToRefs } from "pinia"

const { agencyReceiptCount } = storeToRefs(useDashboardStore())
</script>