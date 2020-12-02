<template>
  <div class="preview">{{ description }}</div>
</template>

<script>
  export default {
    props: { description: { type: String, required: true } },
  };
</script>

<style scoped>
  .preview {
    @apply px-4 py-6 bg-white;
    @apply border border-transparent;
    @apply rounded-md shadow-md cursor-pointer;
    @apply transform hover:shadow-lg hover:scale-101 hover:border-light-blue-600;
    /* dark */
    @apply dark:text-white dark:bg-gray-800 dark:border-gray-500;
    @apply dark:hover:border-gray-300 dark:hover:bg-gray-900;
  }
</style>
