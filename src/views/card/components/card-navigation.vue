<template>
  <div class="navigation">
    <div class="pr-lg active">My debit cards</div>
    <div>All company cards</div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">
  .navigation {
    display: flex;
    @include screen(tab) {
      padding: 0px 20px;
      position: sticky;
      top: 110px;
    }
    > div {
      cursor: pointer;
      opacity: 0.3;
      font-weight: 600;
      &.active {
        opacity: 1;
        position: relative;
        &::after {
          content: "";
          border-top: 3px solid rgb(0, 204, 255);
          position: absolute;
          width: 80%;
          left: 0;
          bottom: 0px;
        }
      }
    }
  }
</style>
