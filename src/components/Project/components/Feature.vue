<template>
  <div class="feature">
    <div
      class="feature__container"
      @mouseleave="setTimeout"
      @mouseenter="clearTimeout"
    >
      <div
        class="feature__container__scroll"
        :class="
          showOptions
            ? 'transform duration-300 ease-in'
            : 'transform duration-300 -translate-x-16 ease-in'
        "
      >
        <!-- Feature Options -->
        <div class="feature__options">
          <div
            @click="deleteFeature"
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
        </div>

        <!-- Feature Bar -->
        <div class="feature__bar">
          <!-- Feature Description -->
          <div
            class="feature__description"
            @click="showOptions = !showOptions"
            title="Toggle feature options"
          >
            <p class="whitespace-nowrap">{{ description }}</p>
          </div>

          <!-- Feature Toggle -->
          <div
            class="feature__toggle__container"
            @click="showDetails = !showDetails"
            :title="
              showDetails
                ? '⬆️ Close feature details'
                : '⬇️ Open feature details'
            "
          >
            <!-- Feature in progress -->
            <div v-if="featureInProgress">
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

            <!-- Feature Total Time -->
            <div
              v-else
              class="feature__total-time"
              :title="
                `⏱ You've spend ${getFeatureTotalTime} hour in total on '${description}'`
              "
            >
              {{ getFeatureTotalTime }}
              <span class="sm:hidden pl-1 text-xs font-thin">h</span>
              <span class="sm:inline-flex hidden pl-1 text-xs font-thin"
                >hours</span
              >
            </div>

            <!-- Open Feature Button -->
            <div class="feature__toggle__btn">
              <svg
                class="self-center w-6 h-6"
                :class="showDetails ? 'transform rotate-180' : 'transform'"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Transition -->
    <transition name="toggle-details" mode="out-in">
      <div v-if="showDetails" class="feature__segments">
        <Segment
          v-for="segment in segments"
          :key="segment.id"
          :project_id="project_id"
          :feature_id="feature_id"
          :segment_id="segment.id"
          :start_date="segment.start_date"
          :start_time="segment.start_time"
          :stop_date="segment.stop_date"
          :stop_time="segment.stop_time"
        />

        <!-- Add New Segment -->
        <button
          v-if="!featureInProgress && !getStartFormDisabledState"
          @click="addSegment"
          class="btn__base btn__new__segment"
          :title="`Start working on '${description}'`"
        >
          Add
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
  import { nanoid } from 'nanoid';
  import dayjs from 'dayjs';
  import Segment from './Segment.vue';

  export default {
    components: {
      Segment,
    },
    props: {
      description: { type: String, required: true },
      segments: { type: Array, required: true },
      project_id: { type: String, required: true },
      feature_id: { type: String, required: true },
    },
    data() {
      return {
        showOptions: false,
        timeout: '',
        showDetails: false,
      };
    },
    methods: {
      addSegment() {
        this.$store.commit({
          type: 'addNewSegment',
          project_id: this.project_id,
          feature_id: this.feature_id,
          segment: {
            id: nanoid(),
            start_date: dayjs().format('YYYY-MM-DD'),
            start_time: '',
            stop_date: '',
            stop_time: '',
          },
        });

        // Disable Start Form and other Add buttons
        this.$store.commit('toggleStartForm', {
          id: this.project_id,
          disable: true,
        });
      },
      deleteFeature() {
        this.$store.commit({
          type: 'deleteFeature',
          project_id: this.project_id,
          feature_id: this.feature_id,
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
      featureInProgress() {
        return this.$store.getters.getFeatureInProgress({
          project_id: this.project_id,
          feature_id: this.feature_id,
        });
      },
      getFeatureTotalTime() {
        return this.$store.getters.getFeatureTotalTime({
          project_id: this.project_id,
          feature_id: this.feature_id,
        });
      },
      getStartFormDisabledState() {
        return this.$store.getters.getProject({ project_id: this.project_id })
          .disable_start_form;
      },
    },
  };
</script>

<style scoped>
  .feature {
    @apply flex flex-col;
    @apply rounded-md shadow-md bg-white;
    @apply dark:text-white dark:bg-gray-800;
    /* dark */
    @apply dark:text-white dark:bg-gray-800 dark:border-gray-500;
    @apply dark:hover:bg-gray-900 dark:hover:border-gray-300;
  }

  .feature__container {
    @apply w-full h-full overflow-hidden rounded-md;
    @apply border border-transparent;
  }
  .feature__container__scroll {
    @apply relative flex items-center w-full h-full;
  }

  .feature__options {
    @apply relative h-full flex items-stretch min-h-full;
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

  .feature__bar {
    @apply relative w-full min-w-full;
    @apply flex justify-between items-center relative;
  }
  .feature__description {
    @apply w-full h-full pl-4 py-7;
    @apply overflow-x-auto cursor-pointer text-left;
    @apply sm:py-5;
    /* dark */
    @apply dark:bg-transparent;
  }

  .feature__toggle__container {
    @apply flex items-center px-4 py-4 cursor-pointer rounded-md;
    @apply bg-gradient-to-r hover:from-light-blue-400 hover:to-teal-500;
    /* dark */
    @apply dark:hover:from-light-blue-500 dark:hover:to-teal-600;
  }
  .feature__total-time {
    @apply p-3 whitespace-nowrap text-right w-auto;
    @apply sm:py-1;
    @apply rounded-md bg-gray-600 text-white font-bold;
    @apply dark:bg-gray-300 dark:text-black;
  }
  .feature__logo {
    @apply rounded-full w-12 h-12 text-white animate-pulse;
    @apply sm:w-8 sm:h-8;
    @apply bg-gradient-to-r  from-red-500 to-red-700;
    @apply dark:from-amber-600 dark:to-amber-800;
  }
  .feature__toggle__btn {
    @apply flex px-1 ml-1;
    @apply text-black rounded-md self-stretch;
    /* dark */
    @apply dark:text-white;
  }

  .feature__segments {
    @apply p-3 space-y-3;
  }
  .btn__new__segment {
    @apply rounded-md;
  }

  /* transition */
  .toggle-details-enter-from,
  .toggle-details-leave-to {
    transform: translateY(-25px);
    opacity: 0.4;
  }
  .toggle-details-enter-active,
  .toggle-details-leave-active {
    transition: all 0.1s ease-out;
  }
  .toggle-details-enter-to,
  .toggle-details-leave-from {
    transform: translateY(0px);
    opacity: 1;
  }
</style>
