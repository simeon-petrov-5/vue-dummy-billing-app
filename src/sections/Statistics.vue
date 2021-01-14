<template>
  <div id="wrapper" class="max-w-3xl px-4 py-4 mx-auto mb-8">
    <div class="sm:grid sm:h-32 sm:grid-flow-row sm:gap-4 sm:grid-cols-4">
      <StatsColumn title="Income" :value="incomeSum">
        <p class="flex items-center justify-end text-green-500 text-md">
          <arrow-up />
        </p>
      </StatsColumn>
      <StatsColumn title="Expenses" :value="expencesSum">
        <p class="flex items-center justify-end text-red-500 text-md">
          <arrow-down />
        </p>
      </StatsColumn>
      <StatsColumn title="Avaliable" :value="avaliableBudget">
        <p
          class="text-right border-solid text-sm mb-1"
          :class="[
            shouldWarnExpences
              ? 'text-red-500 border-red-800'
              : 'text-green-500 border-green-800',
          ]"
        >
          {{ shouldWarnExpences ? "Be careful!" : "Good job!" }}
        </p>
      </StatsColumn>

      <StatsColumn title="Savings" :value="savingsAmount">
        <p class="flex items-center justify-end text-green-500 text-md">
          <arrow-up />
        </p>
      </StatsColumn>
    </div>
  </div>
</template>

<script>
import StatsColumn from "../components/StatsColumn.vue";
import { expence, income } from "../constants/billingTypes";

const amountReducer = (accumulator, currentValue) => ({
  amount: accumulator.amount + currentValue.amount,
});

// Vue 3 Composition API
// import { computed } from "vue";

export default {
  components: {
    StatsColumn,
  },
  props: {
    entries: {
      type: Array,
      default: () => [],
    },
    savingsAmount: {
      type: Number,
    },
  },
  // Use of Vue 2 Options API
  computed: {
    incomeSum() {
      return this.getReduced(income);
    },
    expencesSum() {
      return this.getReduced(expence);
    },
    avaliableBudget() {
      return this.incomeSum - this.expencesSum;
    },
    shouldWarnExpences() {
      return (this.incomeSum / 2) < this.expencesSum;
    },
  },
  methods: {
    getReduced(type) {
      const filtered = this.entries.filter((entry) => entry.type === type);
      const reduced = filtered.reduce(amountReducer);
      return reduced.amount;
    },
  },

  // Use of Vue 3 Composition API
  // setup(props) {
  //   function getReduced(type) {
  //     const filtered = props.entries.filter((entry) => entry.type === type);
  //     const reduced = filtered.reduce(amountReducer);
  //     return reduced.amount;
  //   }

  //   const incomeSum = computed(() => getReduced(income));
  //   const expencesSum = computed(() => getReduced(expence));
  //   const avaliableBudget = computed(() => incomeSum.value - expencesSum.value);
  //   const shouldWarnExpences = computed(
  //     () => incomeSum.value / 2 < expencesSum.value
  //   );

  //   return { incomeSum, expencesSum, avaliableBudget, shouldWarnExpences };
  // },
};
</script>

<style>
</style>