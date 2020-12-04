<template>
  <div class="relative">
    <div
      @click="navigateToProject"
      class="preview"
      :title="`Click to navigate to the overview of ${description}`"
    >
      <div>
        {{ description }}
      </div>

      <!-- Project in progress -->
      <div
        v-if="projectInProgress"
        :title="`You are currently working on ${description}`"
      >
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
      <p
        v-else
        class="feature__total-time"
        :title="`You've worked ${getProjectTotalTime} hours on ${description}`"
      >
        {{ getProjectTotalTime }}
        <span class="sm:hidden pl-1 text-xs font-thin">h</span>
        <span class="sm:inline-flex hidden pl-1 text-xs font-thin">hours</span>
      </p>
    </div>

    <!-- Delete Project  -->
    <div
      @click="deleteProject"
      class="btn__delete__project"
      :title="`Delete Project ${description}`"
    >
      <svg
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      description: { type: String, required: true },
      project_id: { type: String, required: true },
    },
    methods: {
      navigateToProject() {
        this.$router.push(`/projects/${this.project_id}`);
      },
      deleteProject() {
        this.$store.commit({
          type: 'deleteProject',
          project_id: this.project_id,
        });
      },
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
    @apply flex justify-between items-center relative;
    @apply px-4 py-4 bg-white;
    @apply border border-transparent;
    @apply rounded-md shadow-md cursor-pointer;
    @apply hover:shadow-lg hover:border-light-blue-600;
    /* dark */
    @apply dark:text-white dark:bg-gray-800 dark:border-gray-500;
    @apply dark:hover:border-gray-300 dark:hover:bg-gray-900;
  }

  .feature__total-time {
    @apply p-3 whitespace-nowrap text-right w-auto;
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

  .btn__delete__project {
    @apply absolute top-0 left-0 transform -translate-x-1 -translate-y-1;
    @apply cursor-pointer bg-white rounded-md text-red-600 shadow-md;
    @apply border border-gray-200;
    @apply hover:text-white hover:bg-red-600 hover:border-red-600 hover:scale-105;
    @apply dark:text-white dark:bg-black dark:border-gray-500;
    @apply dark:hover:text-white dark:hover:border-red-700 dark:hover:bg-red-700;
  }
</style>
