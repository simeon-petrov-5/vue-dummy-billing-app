<template>
  <ul class="w-80 mx-auto rounded-md shadow-lg">
    <li
      v-for="(entry, index) in entries"
      :key="index"
      class="px-4 py-6 border-b-2 border-gray-300 bg-gray-50 flex items-center"
    >
      <arrow-up v-if="entry.type === 'income'" class="text-green-500 mr-4" />
      <arrow-down v-else class="text-red-500 mr-4" />
      <span class="text-lg font-bold">{{ entry.amount }} $</span>
      <span class="ml-auto">{{ formatDate(entry.date) }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    entries: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      console.log(date, dateString)
      return new Intl.DateTimeFormat("bg-BG").format(date);
    },
  },
};
</script>

<style>
</style>