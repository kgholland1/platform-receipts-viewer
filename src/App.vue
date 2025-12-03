<template>
  <PreLoader v-if="isPreLoading" />
  <GlobalLoader v-model="loaderStore.isLoading" :backdropClosable="false">
     Please wait while we process your request…
  </GlobalLoader>

  <MainHeader v-if="isAuthenticated" />
<div
  :class="[
    'main-content expanded js-container',
    { collapsed: stateStoreInstance.open },
  ]"
  :style="!isAuthenticated ? { paddingLeft: '0', paddingTop: '101px' } : {}"
>
  <MainSidebar v-if="isAuthenticated" />

  <router-view />
</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import PreLoader from "./components/Layouts/PreLoader.vue"
import MainHeader from "./components/Layouts/MainHeader.vue"
import MainSidebar from "./components/Layouts/MainSidebar.vue"
import stateStore from "./utils/store"
import GlobalLoader from '@/components/Layouts/GlobalLoader.vue'
import { useLoaderStore } from '@/stores/loader'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from "pinia"

const isPreLoading = ref<boolean>(true)
const stateStoreInstance = stateStore

const loaderStore  = useLoaderStore()
const { isAuthenticated } = storeToRefs(useAuthStore())

onMounted(() => {
  setTimeout(() => {
      isPreLoading.value = false;
    }, 2000)
})

</script>