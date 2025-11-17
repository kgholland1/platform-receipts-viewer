<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <AccountSettings />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AccountSettings from "../../components/Settings/AccountSettings/AccountSettings.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "AccountSettingsPage",
  components: {
    AccountSettings,
    MainFooter,
  },
});
</script>