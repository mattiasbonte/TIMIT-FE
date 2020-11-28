<template>
  <!-- STOP FORM -->
  <form @submit.prevent="stopSegment" class="form">
    <!-- STOP TIME -->
    <div class="form__time__wrapper">
      <select
        class="form__time flex-grow"
        name="stop_time"
        id="stop_time"
        required
      >
        <option
          v-for="time_stamp in time_stamps"
          :key="time_stamp"
          :value="time_stamp"
          :selected="time_stamp === calcClosestTimeStamp('stop')"
        >
          {{ time_stamp }}
        </option>
      </select>
      <!-- SUBMIT START -->
      <button
        type="submit"
        class="form__button rounded-r-md"
        name="stop_submit"
        id="stop_submit"
      >
        STOP
      </button>
    </div>
  </form>
</template>

<script>
  import dayjs from 'dayjs';

  export default {
    props: {
      project_id: { type: String, required: true },
      feature_id: { type: String, required: true },
      segment_id: { type: String, required: true },
    },
    data() {
      return {
        time_stamps: [],
      };
    },
    created() {
      this.time_stamps = this.generateTimeStamps;
    },
    methods: {
      calcClosestTimeStamp(submit) {
        // Calculates which timestamp is closest to the current time.
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        // set closest 15min interval
        if (submit === 'start') {
          if (minutes < 15) minutes = '00';
          else if (minutes < 30) minutes = '15';
          else if (minutes < 45) minutes = '30';
          else minutes = '45';
        } else if (submit === 'stop') {
          if (minutes < 15) minutes = '15';
          else if (minutes < 30) minutes = '30';
          else if (minutes < 45) minutes = '45';
          else {
            minutes = '00';
            hours++;
            if (hours === 24) {
              hours = 0;
            }
          }
        }

        //add 0 in front when hour < 10
        hours = hours < 10 ? `0${hours}` : hours.toString();

        return `${hours}:${minutes}`;
      },
      stopSegment() {
        this.$store.commit({
          type: 'stopSegment',
          project_id: this.project_id,
          feature_id: this.feature_id,
          segment_id: this.segment_id,
          stop_date: dayjs().format('YYYY-MM-DD'),
          stop_time: this.calcClosestTimeStamp('stop'),
        });

        // Enable start form
        this.$store.commit('toggleStartForm', {
          id: this.project_id,
          disable: false,
        });
      },
    },
    computed: {
      generateTimeStamps() {
        // generate array of times format hh:mm, 15 minute interval
        let time_stamps = [];
        let hours = 0;

        // 24 hour loop
        for (let index = 0; index < 24; index++) {
          let times = [];
          let minutes = 0;

          // 4 x 15m interval loop
          for (let i = 0; i < 4; i++) {
            times.push(
              `${hours < 10 ? '0' : ''}${hours}:${
                minutes < 10 ? '0' : ''
              }${minutes}`
            );
            minutes += 15;
          }

          hours++;
          time_stamps.push(...times);
        }
        return time_stamps;
      },
    },
  };
</script>

<style scoped>
  .form {
    @apply p-3 rounded-md shadow-md bg-white;
    @apply flex flex-col justify-center space-y-3;
    @apply sm:space-x-0 sm:flex-row sm:flex-wrap sm:items-stretch;
    @apply lg:space-y-0 lg:space-x-3 lg:flex-nowrap;
    @apply dark:bg-gray-800 dark:text-black;
  }

  .form__description {
    @apply w-full;
    @apply border-gray-300 rounded-md shadow-sm;
    @apply focus:ring-indigo-500 focus:border-indigo-500;
  }

  .form__datetime__wrapper {
    @apply sm:flex-row sm:space-y-0 sm:space-x-3 flex flex-col justify-between w-full space-y-3;
  }

  .form__date__wrapper {
    @apply flex flex-1;
  }
  .form__date {
    @apply px-3 p-3 text-center shadow-sm sm:w-auto w-full;
    @apply text-white bg-indigo-600;
    @apply border border-transparent;
    @apply hover:bg-indigo-700 cursor-pointer;
  }

  .form__time__wrapper {
    @apply flex flex-1;
    @apply rounded-md shadow-sm;
    @apply sm:flex-row;
  }
  .form__time__label {
    @apply rounded-l-md bg-gray-50 inline-flex items-center px-3 cursor-pointer;
    @apply sm:w-auto w-24;
    @apply text-gray-500 border border-r-0 border-gray-300;
  }
  .form__time {
    @apply text-center flex-1 sm:w-auto cursor-pointer;
    @apply border-gray-300;
    @apply focus:border-indigo-500 focus:outline-none focus:ring-indigo-500;
    @apply dark:text-black;
  }

  .form__button {
    @apply sm:w-auto w-24;
    @apply px-3 p-3 text-center shadow-sm;
    @apply text-white bg-indigo-600;
    @apply border border-transparent;
    @apply hover:bg-indigo-700;
    @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
  }
</style>
