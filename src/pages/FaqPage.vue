<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <FaqAccordion />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FaqAccordion from "../components/Faq/FaqAccordion.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "FaqPage",
  components: {
    FaqAccordion,
    MainFooter,
  },
});
</script>