<template>
  <div class="dark-mode-btn">
    <div class="dark-version">
      <label class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          @click="toggleOnlyHeaderDarkMode"
        />
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OnlyHeaderDarkModeBtn",

  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleOnlyHeaderDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      const element = document.getElementById("darkModeHeader");

      if (element) {
        // Toggle the class on the element
        element.classList.toggle("darkmode-header", this.isDarkMode);
      }

      localStorage.setItem("darkmode-header", this.isDarkMode.toString());
    },
  },
  mounted() {
    const storedDarkMode = localStorage.getItem("darkmode-header");
    if (storedDarkMode) {
      this.isDarkMode = storedDarkMode === "true";
      const element = document.getElementById("darkModeHeader");
      if (element) {
        // Toggle the class on the element
        element.classList.toggle("darkmode-header", this.isDarkMode);
      }
    }
  },
});
</script>