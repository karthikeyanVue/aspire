<template>
  <div class="cards soft-grid-xl py-lg pr-xl">
    <div class="cards-header soft-grid-xs">
      <div class="title">Available balance</div>
      <div class="amount"><span class="mr-xs amount-prefix">S$</span><span class="subheading">3,000</span></div>
      <div class="cta"><div class="btn-primary">New Card</div></div>
    </div>
    <div class="cards-content soft-grid-xs">
      <card-navigation></card-navigation>
      <div class="cards-content--details card-lg soft-grid-lg">
        <div class="cards-content--details__card">
          <debit-card></debit-card>
        </div>
        <div class="cards-content--details__options"><card-options></card-options></div>
        <div class="cards-content--details__others mt-lg">
          <div class="accordion">
            <div class="accordion-header">
              <svg v-svg symbol="Group 11889" size="0 0 24 24" role="presentation" class="navigation-link--icon mx"></svg>
              Card details
            </div>
          </div>
          <div class="accordion mt">
            <div class="accordion-header">
              <svg v-svg symbol="Group 11889 (1)" size="0 0 24 24" role="presentation" class="navigation-link--icon mx"></svg>
              Recent Transaction
            </div>
            <div class="accordion-content">
              <div class="accordion-content--item pa-lg" v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="i">
                <div>
                  <svg v-svg symbol="Group 11889 (1)" size="0 0 24 24" role="presentation" class="navigation-link--icon mx"></svg>
                </div>
                <div style="flex: 1">
                  <div>Hamleys</div>
                  <div style="opacity: 0.3">20 May 2020</div>
                  <div class="primary-color mt-xs">Refund on debit card</div>
                </div>
                <div>- $ 150</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CardNavigation from "./components/card-navigation";
  import DebitCard from "./components/debit-card";
  import CardOptions from "./components/card-options";

  export default {
    components: { CardNavigation, DebitCard, CardOptions },
  };
</script>

<style lang="scss" scoped>
  .cards {
    grid-template-rows: 70px auto;
    @include screen(tab) {
      padding: 0;
      display: block;
      &-header {
        padding: 0px 20px;
        position: sticky;
        top: 30px;
      }
    }
    &-header {
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      grid-template-areas: "title cta" "amount cta";
      .title {
        grid-area: title;
      }
      .amount {
        grid-area: amount;
        display: flex;
        align-items: center;
        &-prefix {
          background: #01d167;
          padding: 4px 16px;
          color: white;
          border-radius: 4px;
        }
        > .subheading {
          font-weight: 600;
        }
      }
      .cta {
        grid-area: cta;
        justify-self: end;
        align-self: center;
      }
    }
    &-content {
      grid-template-rows: 30px auto;
      &--details {
        @include screen(desktop) {
          grid-template-columns: 414px minmax(300px, auto);
          grid-template-rows: 300px 700px;
          grid-template-areas: "card others" "options others";
          &__card {
            grid-area: card;
          }
          &__options {
            grid-area: options;
          }
          &__others {
            grid-area: others;
            display: flex;
            flex-flow: column;
          }
        }
        @include screen(tab) {
          padding: 0;
          gap: 0;
          background: transparent;
          &__card {
            padding: 20px;
            position: sticky;
            top: 150px;
            background: $secondary;
            > div {
              max-width: 400px;
              margin: 0 auto;
            }
          }
          &__options {
            background: $secondary;
            z-index: 2;
          }
          &__others {
            padding: 20px 20px 120px 20px;
            color: black;
            z-index: 2;
            margin: 0;
            background: white;
          }
          grid-template-rows: auto auto auto auto auto;
          box-shadow: none;
          border: none;
        }
      }
    }
  }

  .accordion {
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    max-height: 100%;

    &-header {
      background: #f5f9ff;
      height: 72px;
      display: flex;
      align-items: center;
    }
    &-content {
      overflow: auto;
      max-height: calc(100% - 182px);
      &--item {
        display: flex;
        border-bottom: 1px solid #f5f9ff;
      }
    }
  }
  .primary-color {
    color: $primary;
  }
</style>
