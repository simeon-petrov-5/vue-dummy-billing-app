<template>
  <div
    id="jh-stats-positive"
    class="flex flex-col justify-center px-4 py-4 bg-white border border-gray-300 rounded-md shadow-lg"
  >
    <div>
      <div>
        <slot />
      </div>
      <p class="text-3xl font-semibold text-center text-gray-800">
        {{ value }}
      </p>
      <p class="text-lg text-center text-gray-500">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: Number,
  },
};
</script>

<style>
</style>