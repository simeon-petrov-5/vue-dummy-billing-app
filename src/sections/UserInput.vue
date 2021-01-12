<template>
  <div class="w-1/4 mx-auto flex justify-center items-center mb-8">
    <div class="relative rounded-md shadow-sm">
      <div
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <span class="text-gray-500 sm:text-sm"> $ </span>
      </div>
      <input
        type="number"
        name="price"
        id="price"
        class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-24 sm:text-sm border-gray-300 rounded-md"
        placeholder="0.00"
        v-model.number="amount"
        @keypress.enter="onSubmit"
      />
      <div class="absolute inset-y-0 right-0 flex items-center">
        <label for="currency" class="sr-only">Currency</label>
        <select
          id="currency"
          name="currency"
          class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
          v-model="type"
        >
          <option v-for="type in typeOpts" :key="type">{{ type }}</option>
        </select>
      </div>
    </div>

    <button
      :disabled="isSubmitSidabled"
      @click="onSubmit"
      class="disabled:opacity-50 disabled:cursor-not-allowed ml-4 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
    >
      Save
    </button>
  </div>

  <div></div>
</template>

<script>
import { expence, income } from "../constants/billingTypes";
export default {
  emits: ["onUserInput"],
  data() {
    return {
      amount: null,
      type: expence,
      typeOpts: [expence, income],
    };
  },
  computed: {
    isSubmitSidabled() {
      return !this.amount || this.amount === 0;
    },
  },
  methods: {
    onSubmit() {
      this.$emit("onUserInput", { amount: this.amount, type: this.type, date: new Date().getTime() });
      this.amount = null;
      this.type = expence;
    },
  },
};
</script>