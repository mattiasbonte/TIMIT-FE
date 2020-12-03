<template>
  <div @click="expandSegment = !expandSegment">
    <!-- SEGMENT START & STOP DATE & TIME -->
    <div
      v-if="stop_time !== ''"
      class=" flex flex-wrap items-center justify-between"
    >
      <div
        class="sm:space-x-3 flex items-center flex-grow space-x-3 space-x-reverse cursor-pointer"
      >
        <div class="segment__date">{{ start_date }}</div>
        <div
          :title="`${start_date} ${startDay} ${start_time}`"
          class="segment__datetime"
        >
          <span>{{ startDay }}</span>
          <span>{{ start_time }}</span>
        </div>
        <div>👉🏼</div>
        <div class=" segment__date">{{ stop_date }}</div>
        <div
          :title="`${stop_date} ${stopDay} ${stop_time}`"
          class="segment__datetime"
        >
          <span>{{ stopDay }}</span>
          <span>{{ stop_time }}</span>
        </div>
      </div>

      <!-- CONTROLS -->
      <div v-if="expandSegment" class="flex space-x-2">
        <button @click="editSegment" class="button">
          <svg
            class="hover:text-light-blue-500 w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
            ></path>
          </svg>
        </button>
        <button @click="deleteSegment" class="button">
          <svg
            class="hover:text-red-500 w-6 h-6"
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
        </button>
      </div>
      <div v-else class="hover:scale-125 transform cursor-pointer">
        💡
      </div>
    </div>
  </div>

  <SegmentStopForm
    :project_id="this.project_id"
    :feature_id="this.feature_id"
    :segment_id="this.segment_id"
  />
</template>

<script>
  import dayjs from 'dayjs';
  import SegmentStopForm from './SegmentStopForm';

  export default {
    components: {
      SegmentStopForm,
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
    methods: {
      deleteSegment() {
        this.$store.commit({
          type: 'deleteSegment',
          project_id: this.project_id,
          feature_id: this.feature_id,
          segment_id: this.segment_id,
        });
      },
      editSegment() {
        this.$store.commit({
          type: 'editSegment',
          project_id: this.project_id,
          feature_id: this.feature_id,
          segment_id: this.segment_id,
        });

        // Disable start form
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
      startDay() {
        return dayjs(this.start_date).format('ddd');
      },
      stopDay() {
        if (this.stop_date !== '') {
          return dayjs(this.stop_date).format('ddd');
        }
        return '';
      },
    },
  };
</script>

<style scoped>
  .segment__date {
    @apply px-2 py-4 rounded-md bg-gray-100 hidden;
    @apply sm:py-3 sm:inline;
    @apply dark:bg-gray-700;
  }
  .segment__datetime {
    @apply flex justify-between;
    @apply px-2 py-4 rounded-md bg-gray-100 w-28;
    @apply sm:py-3;
    @apply dark:bg-gray-700;
  }
  .button {
    @apply flex items-center p-1 rounded-md cursor-pointer;
    @apply hover:text-white;
  }
  .button__text {
    @apply sm:inline hidden;
  }
</style>
