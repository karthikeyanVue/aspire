<template>
  <div class="app soft-grid-xl" id="app">
    <Navigation class="app-navigation" />
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from "./components/Navigation.vue";

  export default {
    name: "App",
    components: {
      Navigation,
    },
  };
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
  * {
    box-sizing: border-box;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Open Sans", sans-serif;
    background: #fff;
  }
</style>
<style scoped lang="scss">
  .app {
    background: white;
    height: 100%;
    width: 100%;
    display: grid;
    @include screen(tab) {
      background: $secondary;
      color: white;
      font-size: 12px;
    }
    &-navigation {
      background: $secondary;
      color: white;
    }
    &-content {
      color: #222222;
    }
    @include screen(desktop) {
      grid-template-columns: minmax(200px, 360px) 4fr;
    }
    @include screen(tab) {
      grid-template-rows: auto auto;
      &-navigation {
        background: white;
      }
    }
  }
</style>
