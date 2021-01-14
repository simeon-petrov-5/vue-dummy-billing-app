<template>
  <img alt="Vue logo" class="w-8 mx-auto mb-8" src="./assets/logo.png" />
  <Statistics :entries="entries" :savingsAmount="savingsAmount" />
  <p v-if="showGoodJob" class="text-center mb-8 text-green-500 font-bold">
    WOW, good job on saving!
  </p>
  <UserInput @on-user-input="onUserInput" />
  <ListEntries :entries="entries" />
</template>

<script>
import MockData from "./mockData/billingData.json";
import Statistics from "./sections/Statistics.vue";
import UserInput from "./sections/UserInput.vue";
import ListEntries from "./sections/ListEntries.vue";

export default {
  name: "App",
  components: {
    Statistics,
    UserInput,
    ListEntries,
  },
  data() {
    return {
      entries: [...MockData],
      savingsAmount: 100,
      showGoodJob: false,
    };
  },
  methods: {
    onUserInput(newData) {
      if (newData.type === "income") {
        const savingPart = newData.amount * 0.2;
        this.savingsAmount += savingPart;
        newData.amount = newData.amount - savingPart;
      }
      this.entries.push(newData);
    },
  },
  watch: {
    savingsAmount(updatedAmount, prevAmount) {
      if (updatedAmount > prevAmount * 2) {
        this.showGoodJob = true;
        setTimeout(() => {
          this.showGoodJob = false;
        }, 3000);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 60px 0;
}
</style>
