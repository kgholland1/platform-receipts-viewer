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
              <h3 class="fs-24 fw-semibold mb-2">E-GCR Portal</h3>
              <h5 v-if="!!error" class="fs-18 fw-semibold mb-2 text-danger">{{ error }}</h5>
            </div>
            
            <form @submit.prevent="login">
              <div class="form-group mb-4">
                <label class="label">Email Address</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  v-model="state.email"
                />
              </div>
              <div class="form-group mb-4">
                <label class="label">Password</label>
                <div class="password-wrapper position-relative">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    id="password"
                    class="form-control"
                    placeholder=""
                    v-model="state.password"
                  />
                  <i
                    style="
                      color: #919aa3;
                      font-size: 16px;
                      right: 15px !important;
                      cursor: pointer;
                    "
                    :class="showPassword ? 'ri-eye-line' : 'ri-eye-off-line'"
                    class="password-toggle-icon translate-middle-y top-50 end-0 position-absolute"
                    aria-hidden="true"
                    @click="togglePasswordVisibility"
                  ></i>
                </div>
              </div>
              <div class="form-group mb-4 d-flex justify-content-between">
                <div class="c-form-check form-check">
                  <!-- <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label fs-14 text-body ms-0"
                    for="flexCheckDefault"
                  >
                    Remember me
                  </label> -->
                </div>
                <router-link
                  to="/forget-password"
                  class="text-primary fs-14 text-decoration-none"
                >
                  Forget you password?
                </router-link>
              </div>
              <div class="form-group mb-4">
                <button type="submit" class="default-btn w-100 d-block" :disabled="buttonDisabled">
                  Sign In
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
import { ref, computed } from 'vue'
import type { ApiResult, UserCredentials } from "@/types/auth"
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from "pinia"

const { signIn } = useAuthStore()
const { error } = storeToRefs(useAuthStore())
const router = useRouter()

const state = ref<UserCredentials>({
  email: "",
  password: ""
})
const showPassword = ref(false)
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
}

const buttonDisabled = computed(() => { 
  return !state.value.email  || !state.value.password 
}) 
const login = async () => {
  const response: ApiResult = await signIn(state.value)  

  if (response.success)
    router.push("/")
}
</script>
<script lang="ts">
export default {}
</script>