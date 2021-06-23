<template>
  <div class="credits soft-grid">
    <div class="accordion mt">
      <div class="accordion-header">
        <div class="accordion-header--title">
          <svg v-svg symbol="Group 11889 (1)" size="0 0 24 24" role="presentation" class="navigation-link--icon mx"></svg>
          Credits
        </div>
        <div @click="showCreate = !showCreate" class="btn-primary">+New Loan</div>
      </div>
      <div class="accordion-content">
        <div v-if="showCreate || credits.length == 0" class="accordion-content--item pa-lg">
          <div>
            <svg v-svg symbol="Group 11889 (1)" size="0 0 24 24" role="presentation" class="navigation-link--icon mx"></svg>
          </div>
          <div style="flex: 1">
            <div>
              <label>Amount : <input class="input ml-xs" v-model="amount" type="number" /></label>
            </div>
            <div>
              <label>Term : <input class="input ml-lg" v-model="term" type="number" /></label> Months
            </div>
            <div class="primary-color mt-xs">Weekly payment</div>
          </div>
          <div>
            <div
              @click="
                showCreate = false;
                addLoan();
              "
              class="btn-tertiary"
            >
              Request
            </div>
          </div>
        </div>
        <div class="accordion-content--item pa-lg" v-for="credit in credits" :key="credit.id">
          <div>
            <svg v-svg symbol="Group 11889 (1)" size="0 0 24 24" role="presentation" class="navigation-link--icon mx"></svg>
          </div>
          <div style="flex: 1">
            <div>Credit</div>
            <div style="opacity: 0.3">{{ credit.term }} Months</div>
            <div class="primary-color mt-xs">
              {{ credit.approved ? (credit.paid ? "Repayment done for the week" : "Weekly payment ") : "Pending For Approval" }}
            </div>
          </div>
          <div>
            <div>- $ {{ credit.amount }}</div>
            <div v-show="isAdmin && !credit.approved" @click="approveLoan(credit.id)" class="btn-tertiary mt-xs">Approve</div>
            <div v-show="!isAdmin && credit.approved && !credit.paid" @click="repayLoan(credit.id)" class="btn-primary mt-xs">Repay</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import credit from "@/services/loan";
  import user from "@/services/user";

  export default {
    data() {
      return {
        showCreate: false,
        amount: 0,
        term: 0,
        isAdmin: false,
        credits: [],
      };
    },
    mounted() {
      this.credits = credit.getResource();
      this.isAdmin = user.getResource();
    },
    methods: {
      addLoan() {
        credit.postResource({ body: { amount: this.amount, term: this.term } });
        this.amount = 0;
        this.term = 0;
      },
      approveLoan(id) {
        credit.patchResource({ id, body: { approved: true } });
        this.$forceUpdate();
      },
      repayLoan(id) {
        credit.patchResource({ id, body: { paid: true } });
        this.$forceUpdate();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .credits {
    margin: 0 auto;
    grid-template-columns: minmax(320px, 700px);
  }

  .input {
    font-size: 16px;
    width: 100px;
    font-family: inherit;
    padding: 0.25em 0.5em;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 4px;
  }

  .accordion {
    background: white;
    color: black;
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 30px;
      &--title {
        display: flex;
        align-items: center;
      }
    }
  }
</style>
