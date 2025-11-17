<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <ProfileContent />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProfileContent from "../../components/Social/Profile/ProfileContent.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ProfilePage",
  components: {
    ProfileContent,
    MainFooter,
  },
});
</script>