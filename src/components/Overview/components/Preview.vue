<template>
  <div class="preview">
    {{ description }}

    <!-- Project in progress -->
    <div v-if="projectInProgress">
      <div class="feature__logo">
        <svg
          class=""
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>

    <!-- Project Total Time -->
    <p v-else class="feature__total-time">
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
      projectInProgress() {
        return this.$store.getters.getProjectInProgress({
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

  .feature__logo {
    @apply rounded-full w-12 h-12 text-white animate-pulse;
    @apply sm:w-8 sm:h-8;
    @apply bg-gradient-to-r  from-red-500 to-red-700;
    @apply dark:from-amber-600 dark:to-amber-800;
  }
</style>
