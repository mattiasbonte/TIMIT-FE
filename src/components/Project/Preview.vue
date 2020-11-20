<template>
  <div class="apply-preview">{{ title }}</div>
</template>

<script>
  export default {
    props: { title: { type: String, required: true } },
  };
</script>

<style scoped>
  .apply-preview {
    @apply bg-white;
    @apply px-4 py-6;
    @apply rounded-md shadow-md cursor-pointer;
    @apply transform hover:shadow-lg hover:scale-101;
    /* dark */
    @apply dark:text-black;
  }
</style>
