<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <ChangePassword />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChangePassword from "../../components/Settings/ChangePassword/ChangePassword.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ChangePasswordPage",
  components: {
    ChangePassword,
    MainFooter,
  },
});
</script>