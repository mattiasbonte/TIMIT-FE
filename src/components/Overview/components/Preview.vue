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
    @apply bg-white;
    @apply px-4 py-6;
    @apply rounded-md shadow-md cursor-pointer;
    @apply transform hover:shadow-lg hover:scale-101;
    /* dark */
    @apply dark:text-white dark:bg-gray-800;
  }
</style>
