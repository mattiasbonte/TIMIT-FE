<template>
  <div class="feature">
    <div class="feature__bar" :class="featureBarClasses">
      <div class="feature__wrap">
        <div class="feature__description">
          <p class="whitespace-nowrap">{{ title }}</p>
        </div>
        <p class="feature__total-time">
          99 <span class="sm:inline-flex hidden">hours</span>
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
          :start="segment.start"
          :stop="segment.stop"
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
      title: { type: String, required: true },
      segments: { type: Array, required: true },
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
    @apply p-3 space-x-4 z-20;
    @apply flex flex-nowrap justify-between items-center;
    @apply transform;
    @apply border-gray-100 dark:border-gray-700;
  }
  .feature__wrap {
    @apply flex items-center w-full justify-between space-x-2 overflow-hidden;
  }
  .feature__total-time {
    @apply p-1 whitespace-nowrap;
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
