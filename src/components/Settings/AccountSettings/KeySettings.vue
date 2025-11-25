<template>
  <div class="card border-0 box-shadow border-radius-10 mb-5">
    <div class="card-body p-30">
      <div class=" mb-4">
        <h4 class="fs-20 fw-semibold mb-2">API Access Keys</h4>
        <p class="fs-14 text-body">
          Keys you have generated that can be used to access E-GCR API.
        </p>
      </div>
      <form class="mb-5">
        <div class="form-group mb-3">
          <label class="label">API Key</label>
          <input type="text text-bold fs-18" class="form-control" disabled :value="apiKey?.key" />
        </div>
        <div class="form-group mb-4">
          <label class="label fs-14 text-secondary">Created on <span class="text-bold"> {{ apiKey?.created ?
            formatDate(apiKey.created) : ''
          }}</span> </label>
        </div>
        <div class="form-group mb-5">
          <button type="button" class="default-btn" @click="generateKey">
            Generate new key
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script setup lang="ts">

import { useAgencyStore } from "@/stores/agency"
import { storeToRefs } from "pinia"
import type { ApiResult } from "@/types/auth"
import { formatDate } from "@/utils/helper"
import Swal from "sweetalert2"
import 'sweetalert2/src/sweetalert2.scss'

const { fetchAPIKey, generateAPIKey } = useAgencyStore()
const { apiKey } = storeToRefs(useAgencyStore())

fetchAPIKey()

const generateKey = () => {
  Swal.fire({
    title: 'Are you sure you want to generate a new API key?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
  }).then(async (result) => {
    if (result.isConfirmed) {
      const response: ApiResult = await generateAPIKey()
      if (response.success) {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Receipt is generated successfully',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        })
      }
    }
  })
}


</script>
