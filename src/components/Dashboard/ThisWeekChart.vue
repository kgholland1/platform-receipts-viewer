<template>
  <apexchart type="line" height="300" :options="revenueChart" :series="revenue"></apexchart>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import type { ApexOptions } from 'apexcharts'

interface Props {
  data?: number[]
  categories?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  categories: () => []
})

const chartReady = ref(false)

onMounted(async () => {
  await nextTick()
  chartReady.value = true
})

// Convert data() to reactive refs/computed
const revenue = computed(() => [
  {
    name: "Count",
    data: props.data,
  },
])

const revenueChart = computed<ApexOptions>(() => ({
  chart: {
    animations: {
      enabled: true,
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    },
    redrawOnParentResize: true,
    redrawOnWindowResize: true,
    height: 300,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#5C61F2"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  markers: {
    size: [7],
  },
  grid: {
    borderColor: "rgba(92, 97, 242, 0.25)",
    row: {
      colors: ["#F4F6FA", "transparent"],
      opacity: 1,
    },
  },
  xaxis: {
    categories: props.categories,
    labels: {
      style: {
        colors: [
          "#919AA3",
          "#919AA3",
          "#919AA3",
          "#919AA3",
          "#919AA3",
          "#919AA3",
          "#919AA3",
        ],
      },
    },
  },
  yaxis: {
    labels: {
      formatter: (val: number) => {
        return "" + val / 1
      },
      style: {
        colors: [
          "#A9A9C8",
          "#A9A9C8",
          "#A9A9C8",
          "#A9A9C8",
          "#A9A9C8",
          "#A9A9C8",
          "#A9A9C8",
        ],
      },
    },
  },
}))
</script>