<template>
  <div class="main-content p-0">
    <div class="container-fluid">
      <ForgetPassword />
      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ForgetPassword from "../../components/Authentication/ForgetPassword/ForgetPassword.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ForgetPasswordPage",
  components: {
    ForgetPassword,
    MainFooter,
  },
});
</script>