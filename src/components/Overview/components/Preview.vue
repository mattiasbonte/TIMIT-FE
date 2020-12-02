<template>
  <div class="preview">
    {{ description }}
    <!-- Feature Total Time -->
    <p class="feature__total-time">
      {{ getProjectTotalTime }}
      <span class="sm:hidden pl-1 text-xs font-thin">h</span>
      <span class="sm:inline-flex hidden pl-1 text-xs font-thin">hours</span>
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      description: { type: String, required: true },
      project_id: { type: String, required: true },
    },
    computed: {
      getProjectTotalTime() {
        return this.$store.getters.getProjectTotalTime({
          project_id: this.project_id,
        });
      },
    },
  };
</script>

<style scoped>
  .preview {
    @apply flex justify-between items-center;
    @apply px-4 py-4 bg-white;
    @apply border border-transparent;
    @apply rounded-md shadow-md cursor-pointer;
    @apply transform hover:shadow-lg hover:scale-101 hover:border-light-blue-600;
    /* dark */
    @apply dark:text-white dark:bg-gray-800 dark:border-gray-500;
    @apply dark:hover:border-gray-300 dark:hover:bg-gray-900;
  }

  .feature__total-time {
    @apply p-1 py-3 whitespace-nowrap text-right w-auto;
    @apply sm:py-1;
    @apply rounded-md bg-gray-600 text-white font-bold;
    @apply dark:bg-white dark:text-black;
  }
</style>
