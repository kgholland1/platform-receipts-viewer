<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="card-title d-flex justify-content-between align-items-center mb-3">
        <h3 class="fw-medium fs-18 mb-0">API Keys</h3>
      </div>
      <KeySettings />

      <MainFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import KeySettings from "../../components/Settings/AccountSettings/KeySettings.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";
</script>
