<template>
  <div>
    <div class="navigation pa-lg soft-grid-xl">
      <div class="navigation-title">
        <img src="@/assets/Logo.svg" />
        <div class="mt navigation-description">Trusted way of banking for 3,000+ SMEs and startups in Singapore</div>
      </div>
      <div class="soft-grid navigation-icons">
        <div v-for="link in links" :key="link.name">
          <div class="navigation-link">
            <svg v-svg :symbol="link.icon" size="0 0 24 24" role="presentation" class="navigation-link--icon mr"></svg>
            <router-link class="navigation-link--text" :to="link.route">{{ link.name }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          { name: "Home", icon: "Home", route: "/" },
          { name: "Cards", icon: "Card", route: "/card" },
          { name: "Payments", icon: "Payments", route: "/card" },
          { name: "Credit", icon: "Credit", route: "/card" },
          { name: "Settings", icon: "Account", route: "/card" },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .navigation {
    @include screen(desktop) {
      position: sticky;
      top: 0;
      left: 0;
      height: 100vh;
      grid-template-rows: 140px auto;
    }
    @include screen(tab) {
      padding: 10px 0px;
      display: block;
      height: 70px;
      position: fixed;
      bottom: 0;
      background: white;
      width: 100%;
      box-shadow: 0px 0px 8px #ccc;
      z-index: 3;
    }
    &-title {
      @include screen(tab) {
        display: none;
      }
    }
    &-description {
      opacity: 0.3;
    }
    &-icons {
      @include screen(tab) {
        grid-template-columns: auto auto auto auto auto;
      }
    }
    &-link {
      display: flex;
      align-items: center;
      &--icon {
        fill: white;
      }
      &--text {
        color: white;
        text-decoration: none;
      }
      @include screen(tab) {
        flex-flow: column;
        justify-content: center;
        text-align: center;
        &--icon {
          margin: 0;
          fill: #01d167;
        }
        &--text {
          color: #01d167;
        }
      }
    }
  }
</style>
