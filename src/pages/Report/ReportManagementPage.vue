<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <ReportList />

      <MainFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import ReportList from "@/components/Reports/ReportList.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";
</script>