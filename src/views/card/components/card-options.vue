<template>
  <div id="card-options" class="option pa-xs soft-grid-xs">
    <div v-for="option in options" :key="option.name">
      <div>
        <svg v-svg :symbol="option.icon" size="0 0 32 32" role="presentation" class="navigation-link--icon"></svg>
      </div>
      <div class="option--text">{{ option.name }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [
          { name: "Freeze card", icon: "Freeze card" },
          { name: "Set spend limit", icon: "Set spend limit" },
          { name: "Add to GPay", icon: "GPay" },
          { name: "Replace Card", icon: "Replace card" },
          { name: "Cancel Card", icon: "Deactivate card" },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  @include screen(tab) {
    #card-options {
      border-radius: 0px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
  .option {
    background: #edf3ff;
    grid-template-columns: auto auto auto auto auto;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    color: black;
    &--text {
      color: black;
      @include screen(tab) {
        font-size: 12px;
      }
    }
    svg {
      fill: $primary;
    }
    > div {
      align-self: center;
    }
  }
</style>
