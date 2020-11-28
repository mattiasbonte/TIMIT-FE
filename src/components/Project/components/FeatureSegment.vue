<template>
  <div class="flex flex-wrap items-center justify-between">
    <!-- SEGMENT START & STOP DATE & TIME -->
    <div class="flex items-center flex-grow space-x-2">
      <span>{{ startDay }} {{ start_time }}</span>
      <span>👉🏼</span>
      <FeatureStopForm
        :project_id="this.project_id"
        :feature_id="this.feature_id"
        :segment_id="this.segment_id"
      />
      <span>{{ stopDay }} {{ stop_time }}</span>
    </div>

    <!-- CONTROLS -->
    <div v-if="expandSegment" class="flex space-x-1">
      <button class="button hover:bg-green-400 hover:bg-opacity-40">
        ✏️
      </button>
      <button class="button hover:bg-red-400 hover:bg-opacity-40">
        🗑
      </button>
    </div>

    <!-- INFO TOGGLE -->
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
      };
    },
    computed: {
      startDay() {
        return dayjs(this.start_date).format('dd');
      },
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
