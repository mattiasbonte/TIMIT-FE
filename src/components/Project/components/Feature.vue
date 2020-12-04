<template>
  <div class="feature">
    <div
      @click="toggleDetails"
      class="feature__bar"
      :class="toggle_details ? 'border-b duration-75' : 'duration-75'"
    >
      <div class="feature__wrap">
        <div class="feature__description">
          <!-- Feature Details Toggle -->
          <div
            class="feature__details__toggle"
            :class="
              toggle_details
                ? 'scale-150 transform duration-200'
                : 'scale-100 transform duration-200'
            "
          >
            💡
          </div>

          <!-- Feature Description -->
          <p class="whitespace-nowrap">{{ description }}</p>
        </div>

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
        <p v-else class="feature__total-time">
          {{ getFeatureTotalTime }}
          <span class="sm:hidden pl-1 text-xs font-thin">h</span>
          <span class="sm:inline-flex hidden pl-1 text-xs font-thin"
            >hours</span
          >
        </p>
      </div>
    </div>

    <!-- Transition -->
    <transition name="toggle-details" mode="out-in">
      <div v-if="toggle_details" class="feature__segments">
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
        toggle_details: false,
      };
    },
    methods: {
      toggleDetails() {
        this.toggle_details = !this.toggle_details;
      },
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
    @apply border border-transparent;
    @apply dark:text-white dark:bg-gray-800;
    /* dark */
    @apply dark:text-white dark:bg-gray-800 dark:border-gray-500;
    @apply dark:hover:border-gray-300 dark:hover:bg-gray-900;
  }
  .feature__bar {
    @apply px-3 py-4 space-x-4;
    @apply sm:py-3;
    @apply flex flex-nowrap justify-between items-center;
    @apply transform cursor-pointer;
    @apply border-gray-100 dark:border-gray-700;
  }
  .feature__wrap {
    @apply flex items-center w-full justify-between space-x-2 overflow-hidden;
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

  .feature__description {
    @apply overflow-x-auto flex space-x-3;
    @apply dark:bg-transparent;
  }
  .feature__details__toggle {
    @apply cursor-pointer;
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
