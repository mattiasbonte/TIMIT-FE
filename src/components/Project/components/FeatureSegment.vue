<template>
  <div class="flex flex-wrap items-center justify-start">
    <!-- TIMESTAMPS -->
    <div class="flex space-x-2">
      <span>{{ start_day }} {{ start_time }}</span>
      <span>{{ stopDay }} {{ stop_time }}</span>
    </div>

    <FeatureStopForm
      :project_id="this.project_id"
      :feature_id="this.feature_id"
      :segment_id="this.segment_id"
    />

    <!-- CONTROLS -->
    <div v-if="expandSegment" class="flex space-x-1">
      <button class="button hover:bg-green-500">
        <svg
          class="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
          ></path>
        </svg>
      </button>
      <button class="button hover:bg-red-500">
        <svg
          class="w-4 h-4"
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
      </button>
    </div>

    <!-- CONTROL TOGGLE -->
    <div @click="expandSegment = !expandSegment" class="cursor-pointer">
      <svg
        v-if="!expandSegment"
        class="w-6 h-6"
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
      <svg
        v-else
        class="w-6 h-6"
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
</template>

<script>
  import dayjs from 'dayjs';
  import FeatureStopForm from './FeatureStopForm';

  export default {
    components: {
      FeatureStopForm,
    },
    props: {
      project_id: { type: String, required: true },
      feature_id: { type: String, required: true },
      segment_id: { type: String, required: true },
      start_date: { type: String, required: true },
      start_time: { type: String, required: true },
      stop_date: { type: String, required: true },
      stop_time: { type: String, required: true },
    },
    data() {
      return {
        expandSegment: false,
        start_day: '',
      };
    },
    created() {
      this.start_day = dayjs(this.start_date).format('dd');
    },
    computed: {
      stopDay() {
        if (this.stop_date !== '') {
          return dayjs(this.stop_date).format('dd');
        }
        return '';
      },
    },
  };
</script>

<style scoped>
  .button {
    @apply flex items-center p-1 rounded-md cursor-pointer;
    @apply hover:text-white;
  }
  .button__text {
    @apply sm:inline hidden;
  }
</style>
