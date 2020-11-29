<template>
  <div class="feature">
    <div @click="toggleDetails" class="feature__bar" :class="featureBarClasses">
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
        <div v-if="featureInProgress" class="">
          <svg
            class="animate-pulse w-6 h-6 mx-auto text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
            <path
              d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
            ></path>
          </svg>
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
      <div v-if="toggle_details" class="feature__segments space-y-2">
        <FeatureSegment
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
        <form v-if="!featureInProgress" class="form">
          <button class="feature__segments__new">
            <div class="flex mx-auto">
              <span>NEW</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
  import FeatureSegment from './FeatureSegment.vue';

  export default {
    components: {
      FeatureSegment,
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
    },
    computed: {
      featureBarClasses() {
        return this.toggle_details ? 'border-b duration-75' : 'duration-75';
      },
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
    @apply p-3 space-x-4;
    @apply flex flex-nowrap justify-between items-center;
    @apply transform cursor-pointer;
    @apply border-gray-100 dark:border-gray-700;
  }
  .feature__wrap {
    @apply flex items-center w-full justify-between space-x-2 overflow-hidden;
  }
  .feature__total-time {
    @apply p-1 whitespace-nowrap text-right w-auto;
    @apply rounded-md bg-gray-600 text-white font-bold;
    @apply dark:bg-white dark:text-black;
  }

  .feature__description {
    @apply overflow-x-auto flex space-x-3;
    @apply dark:bg-transparent;
  }
  .feature__details__toggle {
    @apply cursor-pointer;
  }
  .feature__segments {
    @apply p-3;
  }

  .form {
    @apply flex flex-col justify-center space-y-3;
    @apply sm:flex-row sm:items-stretch sm:space-y-0 sm:space-x-3;
    @apply lg:space-y-0 lg:space-x-3 lg:flex-nowrap;
    @apply dark:text-black;
  }
  .feature__segments__new {
    @apply flex px-3 p-2 shadow-sm rounded-md;
    @apply text-white bg-indigo-600;
    @apply border border-transparent;
    @apply hover:bg-indigo-700;
    @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
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
