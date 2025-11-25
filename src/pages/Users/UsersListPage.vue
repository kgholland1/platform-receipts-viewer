<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="card-title d-flex justify-content-between align-items-center mb-3">
        <h3 class="fw-medium fs-18 mb-0">User List</h3>
      </div>
      <div class="card-title d-flex justify-content-between align-items-center mb-3">
        <div></div>
        <button class="btn btn-primary default-btn" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" @click="onAddUser">
          + Add New User
        </button>
      </div>
      <UsersList :users="users" @delete-user="onDeleteUser" />

      <!-- Start Default Offcanvas From Area -->
      <div class="offcanvas offcanvas-custom offcanvas-end" tabindex="-1" id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header border-bottom">
          <h5 class="offcanvas-title fs-18" id="offcanvasRightLabel">
            New User
          </h5>
          <button type="button" ref="closeButtonRef" class="btn-close" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div v-if="error && Array.isArray(error) && error.length > 0" id="errorAlert" class="alert alert-danger"
            role="alert">
            <div v-for="(err, index) in error" :key="index">
              {{ err }}
            </div>
          </div>
          <vee-form ref="formRef" :validation-schema="addUserSchema" @submit="onRegister">
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Fullname</label>
                  <vee-field type="text" name="name" class="form-control" placeholder="Enter Name"
                    v-model="formState.fullName" />
                  <ErrorMessage class="error-message" name="name" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Email Address</label>
                  <vee-field type="text" name="email" class="form-control" placeholder="Enter Email"
                    v-model="formState.email" />
                  <ErrorMessage class="error-message" name="email" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Phone</label>
                  <vee-field type="text" name="phoneNumber" class="form-control" placeholder="Enter Phone"
                    v-model="formState.phoneNumber" />
                  <ErrorMessage class="error-message" name="phoneNumber" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Password</label>
                  <vee-field name="password" :bails="false" v-slot="{ field, errors }">
                    <input type="text" class="form-control" placeholder="Password" v-bind="field"
                      v-model="formState.password" />
                    <div class="error-message" v-for="error in errors" :key="error">
                      {{ error }}
                    </div>
                  </vee-field>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <button type="submit" class="default-btn">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </vee-form>
        </div>
      </div>
      <!-- End Default Offcanvas From Area -->

      <MainFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { Form } from 'vee-validate';
import MainFooter from "../../components/Layouts/MainFooter.vue";
import UsersList from "../../components/Users/UsersList/UsersList.vue";
import type { User, AddUser } from "@/types/user";
import type { ApiResult } from "@/types/auth"
import { useUserStore } from "@/stores/user"
import { storeToRefs } from "pinia"
import Swal from "sweetalert2"
import { useForm } from 'vee-validate';


const { loadUsers, addNewUser, deleteUser } = useUserStore()
const { users, error } = storeToRefs(useUserStore())

users.value = []

const formState = reactive<AddUser>({
  email: "",
  fullName: "",
  phoneNumber: "",
  password: "",
})

const addUserSchema: Record<string, string> = {
  name: "required|min:3|max:100|alpha_spaces",
  email: "required|min:3|max:100|email",
  phoneNumber: "required",
  password: "required|min:5|max:100|excluded:password",
}

const formRef = ref<InstanceType<typeof Form>>();

const onAddUser = () => {
  formState.email = ""
  formState.fullName = ""
  formState.phoneNumber = ""
  formState.password = ""
  error.value = null
  formRef.value?.resetForm();
}

const closeButtonRef = ref<HTMLButtonElement | null>(null)
const { handleSubmit } = useForm();

const onRegister = handleSubmit(async () => {
  if (!formRef.value) return;

  const { valid } = await formRef.value.validate();

  if (!valid) {
    console.log('Form has validation errors');
    return;
  }

  const response: ApiResult = await addNewUser(formState)
  if (response.success) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'User was added successfully.',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })
    formRef.value?.resetForm();
    closeButtonRef.value?.click()
  }
})

const onDeleteUser = (user: User) => {
    Swal.fire({
    title: 'Are you sure you want to delete the user?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Confirm',
    cancelButtonText: 'Cancel'
  }).then(async (result) => {
    if (result.isConfirmed) {
      const response: ApiResult = await deleteUser(user)
      if (response.success) {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'User is deleted successfully',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        })
      }
    }
  })
}


onMounted(() => loadUsers())
</script>

<style scoped>
/* Override default Bootstrap offcanvas width */
.offcanvas-custom {
  width: 600px !important;
}

.error-message {
  color: #dc3545;
  font-size: 14px;
  margin-top: 5px;
  display: block;
}
</style>