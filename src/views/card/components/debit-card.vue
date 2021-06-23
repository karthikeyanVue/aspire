<template>
  <div class="soft-grid-xs">
    <div class="preview">
      <svg v-svg symbol="Home" style="fill: #01d167" size="0 0 12 12" role="presentation" class="navigation-link--icon"></svg>
      show card number
    </div>
    <div class="card soft-grid-xs">
      <div class="flex-end">
        <svg v-svg symbol="Home" style="fill: white" size="0 0 24 24" role="presentation" class="navigation-link--icon mr-xs"></svg>
        aspire
      </div>
      <div class="subheading">Mark Henry</div>
      <div>
        <span>0000</span>
        <span class="mx">0000</span>
        <span class="mr">0000</span>
        <span>2020</span>
      </div>
      <div>
        <span>Thru</span>
        <span class="ml-xs">12/20</span>
        <span class="ml">Cvv</span>
        <span class="ml-xs">***</span>
      </div>
      <div class="flex-end">
        <svg v-svg symbol="Visa Logo" style="fill: white" width="66" viewBox="0 0 66 24" role="presentation" class="navigation-link--icon mr"></svg>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .preview {
    color: #01d167;
    font-size: 12px;
    font-weight: 600;
    text-align: right;
  }
  .card {
    background: #01d167;
    color: white;
    .flex-end {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
</style>
