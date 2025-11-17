<template>
  <div class="dark-mode-btn">
    <div class="dark-version">
      <label class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          @click="toggleDarkMode"
        />
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LightDarkSwtichBtn",

  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle("darkmode-body", this.isDarkMode);
      localStorage.setItem("darkmode-body", this.isDarkMode.toString());
    },
  },
  mounted() {
    const storedDarkMode = localStorage.getItem("darkmode-body");
    if (storedDarkMode) {
      this.isDarkMode = storedDarkMode === "true";
      document.body.classList.toggle("darkmode-body", this.isDarkMode);
    }
  },
});
</script>