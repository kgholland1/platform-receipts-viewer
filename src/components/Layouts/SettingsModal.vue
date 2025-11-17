<template>
  <div class="template-sidebar-option">
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <router-link to="/">
          <img
            src="../../assets/images/logo.png"
            class="main-logo"
            alt="main-logo"
          />
          <img
            src="../../assets/images/white-logo.png"
            class="d-none white-logo"
            alt="white-logo"
          />
        </router-link>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <h3>Vaxo Customization</h3>
        <ul>
          <li>
            <h4>Dark/Light Mode</h4>
            <LightDarkSwtichBtn />
          </li>
          <li>
            <h4>Only Header Dark Mode</h4>
            <OnlyHeaderDarkModeBtn />
          </li>
          <li>
            <h4>Only Sidebar Light Mode</h4>
            <OnlySidebarLightModeBtn />
          </li>
          <!-- <li>
            <h4>LTR/RTL</h4>
            <div class="d-flex justify-content-between">
              <a
                href="https://templates.envytheme.com/belem/default/"
                class="default-btn bg-success d-block w-100 text-decoration-none text-center me-1"
              >
                LTR
              </a>
              <a
                href="https://templates.envytheme.com/belem/rtl/"
                class="default-btn d-block w-100 text-decoration-none text-center ms-1"
              >
                RTL
              </a>
            </div>
          </li> -->
          <li>
            <a
              class="default-btn d-block w-100 text-decoration-none text-center"
              target="_blank"
              href="#"
            >
              Buy Now
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LightDarkSwtichBtn from "./LightDarkSwtichBtn.vue";
import OnlyHeaderDarkModeBtn from "./OnlyHeaderDarkModeBtn.vue";
import OnlySidebarLightModeBtn from "./OnlySidebarLightModeBtn.vue";

export default defineComponent({
  name: "SettingsModal",
  components: {
    LightDarkSwtichBtn,
    OnlyHeaderDarkModeBtn,
    OnlySidebarLightModeBtn,
  },
});
</script>