<template>
  <!-- START FORM -->
  <form v-if="!started" @submit.prevent="submitStartForm" class="form">
    <!-- FEATURE DESCRIPTION -->
    <input
      type="text"
      class="form__description"
      v-model="description"
      name="description"
      id="description"
      placeholder="Describe feature..."
      required
    />

    <div class="form__datetime__wrapper">
      <!-- START DATE -->
      <div class="form__date__wrapper">
        <button
          type="button"
          class="form__button rounded-l-md"
          @click="subtractDate"
        >
          <svg
            class="w-4 h-4 mx-auto"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <input
          type="date"
          class="form__date flex-grow"
          name="start_date"
          id="start_date"
          v-model="start.date"
          @input="setStartDate"
          required
        />
        <button
          v-if="dateBeforeToday"
          type="button"
          class="form__button rounded-r-md"
          @click="addDate"
        >
          <svg
            class="w-4 h-4 mx-auto"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
            <path
              fill-rule="evenodd"
              d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          v-else
          type="button"
          class="form__button rounded-r-md cursor-not-allowed"
        >
          <svg
            class="w-4 h-4 mx-auto"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <!-- START TIME -->
      <div class="form__time__wrapper">
        <label class="form__time__label" for="start_date">
          <div class="mx-auto uppercase">{{ start.day }}</div>
        </label>
        <select
          class="form__time"
          v-model="start.time"
          name="start_time"
          id="start_time"
          required
        >
          <option
            v-for="time_stamp in time_stamps"
            :key="time_stamp"
            :value="time_stamp"
            :selected="time_stamp === start.time"
          >
            {{ time_stamp }}
          </option>
        </select>
        <!-- SUBMIT START -->
        <button
          type="submit"
          class="form__button rounded-r-md"
          name="start_submit"
          id="start_submit"
        >
          START
        </button>
      </div>
    </div>
  </form>

  <!-- STOP FORM -->
  <form v-else @submit.prevent="submitStopForm" class="form">
    <!-- FEATURE DESCRIPTION -->
    <input
      type="text"
      class="form__description"
      v-model="description"
      name="description"
      id="description"
      placeholder="Describe feature..."
      required
    />

    <!-- STOP TIME -->
    <div class="form__time__wrapper">
      <label class="form__time__label" for="stop_time">
        <div class="uppercase">{{ stop.day }}</div>
        <span class="sm:inline hidden ml-2">{{ stop.date }}</span>
      </label>

      <select
        class="form__time flex-grow"
        v-model="stop.time"
        name="stop_time"
        id="stop_time"
        required
      >
        <option
          v-for="time_stamp in time_stamps"
          :key="time_stamp"
          :value="time_stamp"
          :selected="time_stamp === stop.time"
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
    data() {
      return {
        time_stamps: [],
        description: '',
        started: false,
        start: { date: '', day: '', time: '' },
        stop: { date: '', day: '', time: '' },
      };
    },
    created() {
      this.time_stamps = this.generateTimeStamps;
      this.start.date = this.setDate();
      this.start.day = this.setDay(this.start.date);
      this.start.time = this.calcClosestTimeStamp('start');
    },
    methods: {
      setStartDate() {
        if (dayjs(this.start.date).isAfter(dayjs())) {
          this.start.date = this.setDate();
        }
        this.start.day = this.setDay(this.start.date);
      },
      setDate() {
        // Format: 2020-10-20
        return dayjs().format('YYYY-MM-DD');
      },
      setDay(input_date) {
        // Format: MONDAY, TUESDAY...
        if (input_date !== '') {
          return dayjs(this.start.date).format('ddd');
        } else {
          return `...`;
        }
      },
      subtractDate() {
        // when input is empty, add today as a the starting date
        if (this.start.date === '') {
          this.start.date = dayjs().format('YYYY-MM-DD');
        }

        // Format: 2020-10-20
        const decreased_date = dayjs(this.start.date)
          .subtract(1, 'day')
          .format('YYYY-MM-DD');

        this.start.date = decreased_date;
        this.start.day = this.setDay();
      },
      addDate() {
        // when input is empty, add today as a the starting date
        if (this.start.date === '') {
          this.start.date = dayjs().format('YYYY-MM-DD');
        }

        // Format: 2020-10-20
        const increased_date = dayjs(this.start.date)
          .add(1, 'day')
          .format('YYYY-MM-DD');

        this.start.date = increased_date;
        this.start.day = this.setDay();

        const now = dayjs().format('YYYY-MM-DD');
        if (this.start.date > now) return false;
        return true;
      },
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
      submitStartForm() {
        this.stop.date = this.setDate();
        this.stop.day = this.setDay(this.stop.date);
        this.stop.time = this.calcClosestTimeStamp('stop');
        this.started = !this.started;

        this.$store.commit({
          type: 'addNewFeature',
          id: 'lfjla21jflmq902s',
          feature: {
            id: 3,
            title: 'WOOOO OK OK',
            segments: [
              {
                id: 1,
                start: '06-03-2020t10:30',
                stop: '06-03-2020t18:30',
              },
            ],
          },
        });
      },
      submitStopForm() {
        // code
        this.started = !this.started;
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
      dateBeforeToday() {
        if (
          dayjs(this.start.date).isBefore(dayjs()) &&
          dayjs().isSame(this.start.date, 'day')
        ) {
          return false;
        }
        return true;
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
