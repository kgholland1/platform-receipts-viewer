<template>
  <div class="h-80vh">
    <div class="d-table">
      <div class="d-table-cell">
        <div
          class="card border-0 box-shadow border-radius-10 mb-4 w-100"
          style="max-width: 500px; margin: auto"
        >
          <div class="card-body p-30">
            <div class="text-center mb-4">
              <h4 class="fs-20 fw-semibold mb-2">Forgot Your Password</h4>
              <h5 v-if="!!error" class="fs-18 fw-semibold mb-2 text-danger">{{ error }}</h5>
              <p class="fs-14 text-body">
                Enter the email address you used when you joined and we’ll send
                you instructions to reset your password
              </p>
            </div>
            <form>
              <div class="form-group mb-4">
                <label class="label">Email Address</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter email address"
                />
              </div>
              <div class="form-group">
                <button type="button" class="default-btn w-100 d-block" @click="login">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { ApiResult, ForgotPassword } from "@/types/auth"
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from "pinia"
import { useRouter } from 'vue-router'
import Swal from "sweetalert2"

const { forgotPassword } = useAuthStore()
const { error } = storeToRefs(useAuthStore())
const router = useRouter()

const state = ref<ForgotPassword>({
  email: ""
})

const login = async () => {
  const response: ApiResult = await forgotPassword(state.value)

  if (response.success) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Password was reset successfully',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })
    router.push("/")
  }


}
</script>