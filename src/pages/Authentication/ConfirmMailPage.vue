<template>
  <div class="main-content p-0">
    <div class="container-fluid">
      <ConfirmMail />
      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ConfirmMail from "../../components/Authentication/ConfirmMail/ConfirmMail.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ConfirmMailPage",
  components: {
    ConfirmMail,
    MainFooter,
  },
});
</script>