<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div class="card-title d-flex justify-content-between align-items-center mb-3">
            <h3 class="fw-medium fs-18 mb-3">Change Password</h3>
          </div>
          <div v-if="error" id="errorAlert" class="alert alert-danger" role="alert">
            {{ error }}
          </div>
          <vee-form ref="formRef" :validation-schema="changePasswordSchema" @submit="onChangePassword">
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Old Password</label>
                  <vee-field type="password" name="oldPassword" class="form-control" placeholder=""
                    v-model="formState.currentPassword" />
                  <ErrorMessage class="error-message" name="oldPassword" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Password</label>
                  <vee-field name="password" :bails="false" v-slot="{ field, errors }">
                    <input type="password" class="form-control" placeholder="" v-bind="field"
                      v-model="formState.newPassword" />
                    <div class="error-message" v-for="error in errors" :key="error">
                      {{ error }}
                    </div>
                  </vee-field>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Confirm Password</label>
                  <vee-field type="password" name="confirm_password" class="form-control" placeholder="" />
                  <ErrorMessage class="error-message" name="confirm_password" />
                </div>
              </div>
              <div class="col-lg-12 mb-5">
                <div class="form-group">
                  <button type="submit" class="default-btn">
                    Save
                  </button>
                  <button type="button" class="default-btn border-btn ms-3" @click="clearState">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </vee-form>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="fs-18 fw-medium mb-3">Profile</h4>

          <ul class="ps-0 mb-4 list-unstyled">
            <li class="fs-14 text-body mb-2">
              <span class="text-dark">Name:</span> {{ profile?.fullName }}
            </li>
            <li class="fs-14 text-body mb-2">
              <span class="text-dark">Email:</span> {{ profile?.email }}
            </li>
            <li class="fs-14 text-body mb-2">
              <span class="text-dark">Phone:</span> {{ profile?.phoneNumber }}
            </li>
            <li class="fs-14 text-body mb-2">
              <span class="text-dark">Joined:</span> {{ profile?.created }}
            </li>
          </ul>

          <h4 class="fs-18 fw-medium mb-4">Social Profiles:</h4>
          <ul class="ps-0 mb-4 list-unstyled d-flex">
            <li>
              <a href="https://www.facebook.com/"
                class="default-btn text-decoration-none border-btn px-3 py-2 d-inline-block" target="_blank">
                <vue-feather type="facebook" style="width: 16"></vue-feather>
              </a>
            </li>
            <li class="ms-2">
              <a href="https://www.twitter.com/"
                class="default-btn text-decoration-none border-btn px-3 py-2 d-inline-block" target="_blank">
                <vue-feather type="twitter" style="width: 16"></vue-feather>
              </a>
            </li>
            <li class="ms-2">
              <a href="https://www.linkedin.com/"
                class="default-btn text-decoration-none border-btn px-3 py-2 d-inline-block" target="_blank">
                <vue-feather type="linkedin" style="width: 16"></vue-feather>
              </a>
            </li>
            <li class="ms-2">
              <a href="https://www.mail.com/" class="default-btn text-decoration-none border-btn px-3 py-2 d-inline-block"
                target="_blank">
                <vue-feather type="mail" style="width: 16"></vue-feather>
              </a>
            </li>
          </ul>

          <h4 class="fs-18 fw-medium mb-3">Other Info:</h4>
          <ul class="ps-0 mb-0 list-unstyled">
            <li class="fs-14 text-body mb-2">
              <span class="text-dark">Agency:</span> {{ userAgency?.name }}
            </li>
            <li class="fs-14 text-body mb-2">
              <span class="text-dark">Ministry:</span> {{ userAgency?.ministry }}
            </li>
            <li class="fs-14 text-body mb-2">
              <span class="text-dark">Email:</span> {{ userAgency?.emailAddress }}
            </li>
            <li class="fs-14 text-body mb-2">
              <span class="text-dark">Contact:</span> {{ userAgency?.contactNumber }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import type { UserChangePassword } from "@/types/user";
import { Form } from 'vee-validate';
import type { ApiResult } from "@/types/auth"
import { useUserStore } from "@/stores/user"
import { useAuthStore } from "@/stores/auth"
import { storeToRefs } from "pinia"
import Swal from "sweetalert2"
import { useForm } from 'vee-validate'
import { useRouter } from "vue-router";

const { fetchProfile, changePassword } = useUserStore()
const { profile, error } = storeToRefs(useUserStore())

const { userAgency, clearToken } = useAuthStore()
const router = useRouter()

const formState = reactive<UserChangePassword>({
  currentPassword: "",
  newPassword: ""
})

const changePasswordSchema: Record<string, string> = {
  oldPassword: "required",
  password: "required|min:5|max:100|excluded:password",
  confirm_password: "passwords_mismatch:@password"
}

const formRef = ref<InstanceType<typeof Form>>();

const clearState = () => {
  formState.currentPassword = ""
  formState.newPassword = ""
  error.value = null
  formRef.value?.resetForm();
}

const { handleSubmit } = useForm();

const onChangePassword = handleSubmit(async () => {
  if (!formRef.value) return;

  const { valid } = await formRef.value.validate();

  if (!valid) {
    console.log('Form has validation errors');
    return;
  }

  const response: ApiResult = await changePassword(formState)
  if (response.success) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Password was changed successfully.',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })
    formRef.value?.resetForm();
    clearToken()
    router.push("/");
  }
})


onMounted(() => fetchProfile())
</script>

<style scoped>
.error-message {
  color: #dc3545;
  font-size: 14px;
  margin-top: 5px;
  display: block;
}
</style>