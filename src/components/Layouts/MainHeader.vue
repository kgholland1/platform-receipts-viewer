<template>
  <header id="darkModeHeader" class="header-area bg-white mb-4">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-7">
          <div class="left-header-content">
            <ul
              class="d-lg-flex d-md-flex align-items-center ps-0 mb-0 list-unstyled"
            >
              <li class="mb-3 mb-md-0 mb-lg-0">
                <div
                  class="d-flex justify-content-between align-items-center cw-273"
                >
                    <div class="flex-shrink-0">
                      <img
                        style="width: 50px; height: 50px;"
                        src="../../assets/images/coatarms.svg"
                        alt="logo"
                      />
                    </div>
                    <div class="lc-wordmark" role="img" aria-label="Controller and Account General">
                      <span class="lc-line1">
                        <span class="lc-primary">e-</span>
                        <span class="lc-accent">GCR PORTAL</span>
                      </span>
                      <span class="lc-line2">THE CONTROLLER AND ACCOUNTANT GENERAL</span>
                    </div>
                  <div>
                    <button
                      class="border-0 p-0 bg-transparent js-sidebar-expand flex-grow-1 ms-3 text-sm-end menu-bergur"
                      @click="stateStoreInstance.onChange"
                    >
                      <div
                        id="closeBtn"
                        @click="toggleButtonVisibility('openBtn')"
                        v-show="showOpenBtn"
                      >
                        <vue-feather type="menu"></vue-feather>
                      </div>
                      <div
                        id="openBtn"
                        @click="toggleButtonVisibility('closeBtn')"
                        v-show="showCloseBtn"
                      >
                        <vue-feather type="x"></vue-feather>
                      </div>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-6 col-md-5">
          <div class="float-lg-end float-md-end">
            <ul
              class="right-header-content list-unstyled d-flex justify-content-lg-end justify-content-md-end justify-content-center align-items-center mb-0 ps-0"
            >
              <li>
                <div class="dropdown date">
                  <button
                    class="btn bg-transparent p-0 border-0 p-0 position-relative badge"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather class="t-0" type="calendar"></vue-feather>
                  </button>
                  <div class="dropdown-menu dropdown-lg p-0 rounded-0 border-0">
                    <div class="today-date">
                      <span class="fw-medium">{{ formattedDate }}</span>
                      <vue-feather type="calendar"></vue-feather>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="dropdown user-profile">
                  <a
                    href="#"
                    class="d-flex align-items-center user-control text-decoration-none"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <!-- <div class="flex-shrink-0">
                      <img
                        class="rounded-circle"
                        src="../../assets/images/user/user-1.jpg"
                        alt="user-1"
                      />
                    </div> -->
                    <div class="flex-grow-1 ms-3">
                      <div
                        class="d-flex align-items-center justify-content-between"
                      >
                        <div class="me-5 d-none d-lg-block">
                          <h3>{{ headerProfile.fullName }}</h3>
                          <span>{{ headerProfile.role }}</span>
                        </div>

                        <i class="ri-arrow-down-s-line"></i>
                      </div>
                    </div>
                  </a>

                  <ul class="dropdown-menu border-0 box-shadow rounded-0">
                    <li class="me-0">
                      <router-link
                        class="dropdown-item d-flex align-items-center text-body"
                        to="/profile"
                      >
                        <vue-feather
                          type="user"
                          class="text-primary"
                        ></vue-feather>
                        <span class="ms-2 text-dark">Profile</span>
                      </router-link>
                    </li>
                    <li class="me-0">
                      <router-link
                        class="dropdown-item d-flex align-items-center text-body"
                        to="/log-out"
                      >
                        <vue-feather
                          type="log-out"
                          class="text-primary"
                        ></vue-feather>
                        <span class="ms-2 text-dark" @click="clearToken">Logout</span>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useAuthStore } from '@/stores/auth'
import stateStore from "@/utils/store";
const { clearToken, headerProfile } = useAuthStore()

const formattedDate = ref("")
const currentDate = new Date()

const showOpenBtn = ref(true)
const showCloseBtn = ref(false)

const stateStoreInstance = stateStore

onMounted(() => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]

      formattedDate.value = `${currentDate.getDate()} ${
        months[currentDate.getMonth()]
      } ${currentDate.getFullYear()}`
    })

function toggleButtonVisibility(buttonId: string) {
      if (buttonId === "openBtn") {
        showOpenBtn.value = false;
        showCloseBtn.value = true;
        // Perform any other actions you want after clicking "open"
      } else if (buttonId === "closeBtn") {
        showOpenBtn.value = true;
        showCloseBtn.value = false;
        // Perform any other actions you want after clicking "close"
      }
    }

</script>
<script lang="ts">
export default {}
</script>
<style>
  /* Container: fixed brand-mark box */
  .lc-wordmark{
    width:180px; height:50px;
    display:flex; flex-direction:column; justify-content:center;
    gap:6px; /* space between lines */
    overflow:hidden; /* ensure max size */
    color: #1a1a1a; /* inherits well; change to match your theme */
  }

  /* Line 1: bold, compact, with subtle accent */
  .lc-line1{
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;
    line-height:1; letter-spacing:0.8px; white-space:nowrap;
    font-weight:800; font-size:16px; /* tuned to fit 150×50 */
    color: green;
    text-transform:uppercase;
  }
  .lc-primary{ opacity:.92; }
  .lc-accent{
    margin-left:6px;
    background:linear-gradient(20deg, currentColor 0%, rgba(0,128,0,.85) 100%);
    -webkit-background-clip:text; background-clip:text; color:transparent;
    color: green;
  }

  /* Line 2: small, tracked out for legibility */
  .lc-line2{
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;
    font-weight:700; text-transform:uppercase;
    line-height:1.05; letter-spacing:1.1px;
    font-size:7px; /* long subtitle tuned to fit width */
    opacity:.85;
    color: green;
  }

  /* Optional: adapts nicely on dark backgrounds */
  @media (prefers-color-scheme: dark){
    .lc-wordmark{ color:#f1f1f1; }
  }
</style>