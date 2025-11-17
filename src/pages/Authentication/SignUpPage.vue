<template>
  <div class="main-content p-0">
    <div class="container-fluid">
      <SignUp />
      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SignUp from "../../components/Authentication/SignUp/SignUp.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "SignUpPage",
  components: {
    SignUp,
    MainFooter,
  },
});
</script>