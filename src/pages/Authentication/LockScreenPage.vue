<template>
  <div class="container-fluid">
    <LockScreen />
    <MainFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LockScreen from "../../components/Authentication/LockScreen/LockScreen.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "LockScreenPage",
  components: {
    LockScreen,
    MainFooter,
  },
});
</script>