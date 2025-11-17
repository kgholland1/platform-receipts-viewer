import { createApp } from "vue"
import { createPinia } from 'pinia'
import App from "./App.vue"
import axiosInstance from './plugins/axios'
import router from "./router"
import BootstrapVueNext from "bootstrap-vue-next"
import VueApexCharts from "vue3-apexcharts"
import VueFeather from 'vue-feather'
import { useAuthStore } from '@/stores/auth'
import type { Plugin } from 'vue'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue-next/dist/bootstrap-vue-next.css"

import "./assets/custom.scss"

const app = createApp(App).use(router)
const pinia = createPinia()
app.use(pinia)

app.config.globalProperties.$axios = axiosInstance

const authStore = useAuthStore()
authStore.initAuth()

app.use(VueApexCharts as Plugin)
//app.component('apexChart', VueApexCharts)

app.use(BootstrapVueNext)

app.component(VueFeather.name || 'VueFeather', VueFeather)
app.mount("#app");

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: typeof axiosInstance
  }
}