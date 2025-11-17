<template>
  <div class="row justify-content-center">
    <div class="col-xxl-4 col-sm-6">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-2">
          <div class="d-flex align-items-center">
            <div class="flex-grow-1 me-3 p-3">
              <h3 class="fw-medium fs-18 mb-1">Total Receipts</h3>
              <h1 class="fw-medium fs-30 mb-0">{{ dailyReceiptCount?.receiptCount }}</h1>
            </div>
            <div class="flex-shrink-0">
              <div class="crm-icon">
                <img src="@/assets/images/icons/crm-3.svg" alt="crm-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-4 col-sm-6">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-2">
          <div class="d-flex align-items-center">
            <div class="flex-grow-1 me-3 p-3">
              <h3 class="fw-medium fs-18 mb-1">Total Amount</h3>
              <h1 class="fw-medium fs-30 mb-0">₵{{ dailyReceiptCount?.receiptTotal.toFixed(2) }}</h1>
            </div>
            <div class="flex-shrink-0">
              <div class="crm-icon bg-warning">
                <img src="@/assets/images/icons/crm-2.svg" alt="crm-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-4 col-sm-6">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-2">
          <div class="d-flex align-items-center">
            <div class="flex-grow-1 me-3 p-3">
              <h3 class="fw-medium fs-18 mb-1">Total Fees</h3>
              <h1 class="fw-medium fs-30 mb-0">₵{{ dailyReceiptCount?.receiptFees.toFixed(2) }}</h1>
            </div>
            <div class="flex-shrink-0">
              <div class="crm-icon bg-success">
                <img src="@/assets/images/icons/crm-1.svg" alt="crm-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDashboardStore } from '@/stores/dashboard'
import { storeToRefs } from "pinia"

const { dailyReceiptCount } = storeToRefs(useDashboardStore())
</script>
