<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <SettingContent />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SettingContent from "../../components/Social/Setting/SettingContent.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "SettingPage",
  components: {
    SettingContent,
    MainFooter,
  },
});
</script>