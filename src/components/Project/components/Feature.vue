<template>
  <div class="feature">
    <div class="feature__bar" :class="featureBarClasses">
      <div class="feature__wrap">
        <div class="feature__description">
          <p class="whitespace-nowrap">{{ description }}</p>
        </div>
        <div v-if="featureInProgress" class="feature__total-time">
          <svg
            class="w-6 h-6 mx-auto text-red-500"
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
        <p v-else class="feature__total-time">
          {{ getFeatureTotalTime
          }}<span class="sm:inline-flex hidden pl-1">Hours</span>
        </p>
      </div>
      <div class="feature__toggle-details" @click="toggleDetails">
        <svg
          class="w-5 h-5"
          :class="toggleDetailsClasses"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
    <transition name="toggle-details" mode="out-in">
      <div v-if="toggle_details" class="feature__segments">
        <FeatureSegment
          v-for="segment in segments"
          :key="segment.id"
          :project_id="this.project_id"
          :feature_id="this.feature_id"
          :segment_id="segment.id"
          :start_date="segment.start_date"
          :start_time="segment.start_time"
          :stop_date="segment.stop_date"
          :stop_time="segment.stop_time"
        />
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
      toggleDetailsClasses() {
        return this.toggle_details
          ? 'transform -rotate-90 duration-200'
          : 'transform rotate-0 duration-200';
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
    @apply dark:text-white dark:bg-gray-800;
  }
  .feature__bar {
    @apply p-3 space-x-4;
    @apply flex flex-nowrap justify-between items-center;
    @apply transform;
    @apply border-gray-100 dark:border-gray-700;
  }
  .feature__wrap {
    @apply flex items-center w-full justify-between space-x-2 overflow-hidden;
  }
  .feature__total-time {
    @apply p-1 whitespace-nowrap text-center w-14 sm:w-28;
    @apply rounded-md bg-gray-600 text-white font-bold;
    @apply dark:bg-white dark:text-black;
  }

  .feature__description {
    @apply overflow-x-auto;
    @apply dark:bg-transparent;
  }
  .feature__toggle-details {
    @apply rounded-full border-transparent border;
    @apply hover:bg-teal-500 hover:text-white cursor-pointer hover:border-white;
    @apply dark:bg-white text-black;
  }
  .feature__segments {
    @apply px-2 py-2;
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
