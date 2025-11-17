<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <AddUser />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddUser from "../../components/Users/AddUser/AddUser.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "AddUserPage",
  components: {
    AddUser,
    MainFooter,
  },
});
</script>