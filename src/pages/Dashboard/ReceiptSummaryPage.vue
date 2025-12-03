<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div v-if="!error">
        <DailySummary />

        <div class="revenue-progress-roadmap-area">
          <div class="row">
            <div class="col-lg-6 col-xxl-6">
              <WeeklyChart />
            </div>

            <div class="col-lg-6 col-xxl-6">
              <AgencySummary />
            </div>
          </div>
        </div>
        <LatestReceipts />
      </div>
      <div v-else class="d-flex justify-content-center align-items-center" style="height: 20vh;">
        <h6>Connection issue detected. Please verify your internet connection..</h6>
      </div>
      <MainFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import DailySummary from "../../components/Dashboard/DailySummary.vue"
import WeeklyChart from "../../components/Dashboard/WeeklyChart.vue"
import AgencySummary from "../../components/Dashboard/AgencySummary.vue"
import LatestReceipts from "../../components/Dashboard/LatestReceipts.vue"
import MainFooter from "../../components/Layouts/MainFooter.vue"
import { useDashboardStore } from '@/stores/dashboard'
import { storeToRefs } from "pinia"

const { dashboardSummary } = useDashboardStore()
const { error } = storeToRefs(useDashboardStore())

console.log(error.value)

onMounted(() => dashboardSummary())

</script>