<template>
  <div>
    <div class="navigation pa-lg soft-grid-xl">
      <div class="navigation-title">
        <img src="@/assets/Logo.svg" />
        <div class="mt navigation-description">Trusted way of banking for 3,000+ SMEs and startups in Singapore</div>
      </div>
      <div class="soft-grid navigation-icons">
        <div v-for="link in links" :key="link.name">
          <router-link :exact-active-class="'active'" class="navigation-link" :to="link.route">
            <svg v-svg :symbol="link.icon" size="0 0 24 24" role="presentation" class="navigation-link--icon mr"></svg>
            <span class="navigation-link--text">{{ link.name }}</span>
          </router-link>
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
          { name: "Payments", icon: "Payments", route: "/payment" },
          { name: "Credit", icon: "Credit", route: "/credit" },
          { name: "Settings", icon: "Account", route: "/settings" },
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
      text-decoration: none;
      &--icon {
        fill: white;
      }
      &--text {
        color: white;
      }
      &.active &--icon {
        fill: #01d167;
      }
      &.active &--text {
        color: #01d167;
      }

      @include screen(tab) {
        flex-flow: column;
        justify-content: center;
        text-align: center;
        &--icon {
          margin: 0;
          fill: #ccc;
        }
        &--text {
          color: #ccc;
        }
        &.active &--icon {
          fill: #01d167;
        }
        &.active &--text {
          color: #01d167;
        }
      }
    }
  }
</style>
