<template>
  <div
    class="preview__container"
    @mouseleave="setTimeout"
    @mouseenter="clearTimeout"
  >
    <div
      class="preview__container__scroll"
      :class="
        showOptions
          ? 'transform duration-300 ease-in'
          : 'transform duration-300 -translate-x-32 ease-in'
      "
    >
      <!-- PREVIEW OPTIONS -->
      <div class="preview__options">
        <!-- Delete Project  -->
        <div
          @click="deleteProject"
          class="btn__options__base btn__option__delete"
          :title="`⚠️ Delete '${description}'`"
        >
          <svg
            class="btn__option__icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <!-- Share Project  -->
        <div
          class="btn__options__base btn__option__share"
          title="🔗 Copy public link"
        >
          <!-- share-link icon -->
          <svg
            class="btn__option__icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
            ></path>
            <path
              d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
            ></path>
          </svg>
        </div>
      </div>

      <!-- PREVIEW BAR -->
      <div class="preview__bar">
        <!-- Project Description -->
        <div
          class="project__description"
          @click="showOptions = !showOptions"
          title="Click to toggle project options"
        >
          {{ description }}
        </div>

        <!-- Project in progress -->
        <div
          class="project__navigation"
          @click="navigateToProject"
          :title="`➡️ Navigate to project overview of '${description}'`"
        >
          <div
            v-if="projectInProgress"
            :title="`You are currently working on ${description}`"
          >
            <div class="project__logo">
              <svg
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
          <div
            v-else
            class="project__total-time"
            :title="
              `⏱ You've worked ${getProjectTotalTime} hours on ${description}`
            "
          >
            {{ getProjectTotalTime }}
            <span class="sm:hidden pl-1 text-xs font-thin">h</span>
            <span class="sm:inline-flex hidden pl-1 text-xs font-thin"
              >hours</span
            >
          </div>

          <!-- Navigate To Project Button -->
          <div class="project__navigation__btn">
            <svg
              class="self-center w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      description: { type: String, required: true },
      project_id: { type: String, required: true },
    },
    data() {
      return {
        showOptions: false,
        timeout: '',
      };
    },
    methods: {
      navigateToProject() {
        this.$router.push(`/projects/${this.project_id}`);
      },
      shareProject() {
        // copy link to project to clipboard
        //TODO: COPY LINK TO CLIPBOARD
      },
      deleteProject() {
        this.$store.commit({
          type: 'deleteProject',
          project_id: this.project_id,
        });
      },
      setTimeout() {
        // If the options are already hidden, don't run the timeout
        if (this.showOptions) {
          this.timeout = setTimeout(() => {
            this.showOptions = false;
          }, 1000);
        }
      },
      clearTimeout() {
        // If mouse enters before timeout is activated, reset the timeout
        clearTimeout(this.timeout);
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
  .preview__container {
    @apply w-full h-full overflow-hidden;
    @apply border border-transparent;
    @apply rounded-md shadow-md bg-white;
    @apply hover:shadow-lg hover:border-light-blue-600;
    /* dark */
    @apply dark:text-white dark:bg-gray-800 dark:border-gray-500;
    @apply dark:hover:bg-gray-900 dark:hover:border-gray-300;
  }
  .preview__container__scroll {
    @apply relative flex items-center w-full h-full;
  }

  .preview__options {
    @apply relative h-full flex items-stretch;
  }
  .btn__options__base {
    @apply relative flex cursor-pointer w-16 h-full;
    @apply text-white bg-gray-600;
    /* dark */
    @apply dark:bg-gray-300 dark:text-gray-800;
    @apply dark:hover:text-white;
  }
  .btn__option__icon {
    @apply self-center w-6 h-6 mx-auto;
  }
  .btn__option__delete {
    @apply hover:bg-red-500;
    @apply dark:hover:bg-red-600;
  }
  .btn__option__share {
    @apply hover:bg-blue-500;
    /* dark */
    @apply dark:hover:bg-blue-600;
  }

  .preview__bar {
    @apply relative w-full min-w-full;
    @apply flex justify-between items-center;
  }
  .project__description {
    @apply w-full h-full pl-4 py-7;
    @apply overflow-x-auto cursor-pointer text-left;
    @apply sm:py-5;
    /* dark */
    @apply dark:bg-transparent;
  }

  .project__navigation {
    @apply flex items-center pl-4 pr-1 py-4 cursor-pointer;
    @apply bg-gradient-to-r hover:from-light-blue-400 hover:to-teal-500;
    /* dark */
    @apply dark:hover:from-light-blue-500 dark:hover:to-teal-600;
  }
  .project__total-time {
    @apply p-3 whitespace-nowrap text-right w-auto;
    @apply sm:py-1;
    @apply rounded-md bg-gray-600 text-white font-bold;
    /* dark */
    @apply dark:bg-gray-300 dark:text-black;
  }
  .project__logo {
    @apply rounded-full w-12 h-12 text-white animate-pulse;
    @apply sm:w-8 sm:h-8;
    @apply bg-gradient-to-r  from-red-500 to-red-700;
    /* dark */
    @apply dark:from-amber-600 dark:to-amber-800;
  }
  .project__navigation__btn {
    @apply flex px-1 ml-1;
    @apply text-black rounded-md self-stretch;
    /* dark */
    @apply dark:text-white;
  }
</style>
