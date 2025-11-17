<template>
  <div class="dark-mode-btn">
    <div class="dark-version">
      <label class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          @click="toggleOnlySidebarLightMode"
        />
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OnlySidebarLightModeBtn",

  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleOnlySidebarLightMode() {
      this.isDarkMode = !this.isDarkMode;
      const element = document.getElementById("SidebarLightMode");

      if (element) {
        // Toggle the class on the element
        element.classList.toggle("darkmode-sidebar-area", this.isDarkMode);
      }

      localStorage.setItem("darkmode-sidebar-area", this.isDarkMode.toString());
    },
  },
  mounted() {
    const storedDarkMode = localStorage.getItem("darkmode-sidebar-area");
    if (storedDarkMode) {
      this.isDarkMode = storedDarkMode === "true";
      const element = document.getElementById("SidebarLightMode");
      if (element) {
        // Toggle the class on the element
        element.classList.toggle("darkmode-sidebar-area", this.isDarkMode);
      }
    }
  },
});
</script>