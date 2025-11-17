<template>
  <div class="main-content p-0">
    <div class="container-fluid">
      <ResetPassword />
      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ResetPassword from "../../components/Authentication/ResetPassword/ResetPassword.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ResetPasswordPage",
  components: {
    ResetPassword,
    MainFooter,
  },
});
</script>