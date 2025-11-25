<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body px-4 py-5">
          <div class="text-center">
            <img
              src="../assets/images/404.png"
              class="mb-4"
              alt="starter-img"
            />
            <h3 class="fs-30 fw-medium mb-1">Not Found</h3>
            <p class="text-body mb-4">
              Sorry, what you are looking for cannot be found.
            </p>
            <router-link
              to="/"
              class="default-btn text-decoration-none text-white"
            >
              Back To Home
            </router-link>
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ErrorPage",
  components: {
    MainFooter,
  },
});
</script>