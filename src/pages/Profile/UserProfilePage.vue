<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <UserProfile />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserProfile from "../../components/Profile/UserProfile/UserProfile.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "UserProfilePage",
  components: {
    UserProfile,
    MainFooter,
  },
});
</script>