<template>
  <div class="main-content p-0">
    <div class="container-fluid">
      <LogOut />
      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogOut from "../../components/Authentication/LogOut/LogOut.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "LogOutPage",
  components: {
    LogOut,
    MainFooter,
  },
});
</script>