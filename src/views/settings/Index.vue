<template>
  <div class="settings">
    <div class="heading">Current : {{ isAdmin ? "Admin" : "User" }}</div>
    <div>
      <div v-if="isAdmin" @click="switchUser" class="btn-primary">Switch to User</div>
      <div v-else @click="switchUser" class="btn-tertiary">Switch to Admin</div>
    </div>
  </div>
</template>

<script>
  import user from "@/services/user";

  export default {
    data() {
      return {
        isAdmin: false,
      };
    },
    mounted() {
      this.isAdmin = user.getResource();
    },
    methods: {
      switchUser() {
        this.isAdmin = user.postResource({ body: {} });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .settings {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-flow: column;
  }
</style>
