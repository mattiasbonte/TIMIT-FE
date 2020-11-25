<template>
  <form action="" class="form">
    <!-- DESCRIPTION -->
    <div>
      <label for="description" class="sr-only">Feature Description</label>
      <input
        type="text"
        class="form__description"
        id="description"
        placeholder="Describe feature..."
        required
      />
    </div>
    <!-- START DATETIME -->
    <p class="text-center">START: FRI 10:00 - 09/11/2020</p>

    <!-- START DAY -->
    <div class="p-2 overflow-hidden">
      <!-- SELECT DAY BUTTONS -->
      <div class="flex justify-center space-x-2 overflow-x-scroll">
        <button type="button" class="button">
          <svg
            class="w-5 h-5"
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
        <input type="date" class="button" @input="setDate" v-model="date" />
        <button type="button" class="button">
          <svg
            class="w-5 h-5"
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
      </div>
    </div>

    <!-- SELECT START TIME -->
    <div>
      <label for="location" class="block text-sm font-medium text-gray-700"
        >Hours</label
      >
      <select
        id="start_hours"
        class="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:text-black block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md"
      >
        <option
          v-for="time_stamp in time_stamps"
          :key="time_stamp"
          :selected="time_stamp === closest_time_stamp"
        >
          {{ time_stamp }}
        </option>
      </select>
      <button type="submit" name="submit" id="submit" class="button">
        START
      </button>
    </div>
  </form>
</template>

<script>
  // import dayjs from 'dayjs';

  export default {
    data() {
      return {
        date: '',
        time_stamps: [],
        closest_time_stamp: '',
      };
    },
    created() {
      this.generateTimeStamps;
      this.calcClosestTimeStamp;
    },
    methods: {
      generateTimeStamps() {
        // generate array of times format hh:mm, 15 minute interval
        let time_stamps = [];
        let hours = 0;

        //hourly loop
        for (let index = 0; index < 24; index++) {
          let times = [];
          let minutes = 0;

          //15m interval loop
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
        this.time_stamps = time_stamps;
      },
      calcClosestTimeStamp() {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        //add 0 in front when hour < 10
        hours = hours < 10 ? `0${hours}` : hours.toString();

        // set closest 15min interval
        if (minutes < 15) minutes = '00';
        else if (minutes < 30) minutes = '15';
        else if (minutes < 45) minutes = '30';
        else minutes = '45';

        this.closest_time_stamp = `${hours}:${minutes}`;
      },
      setDate(event) {
        const e = event.target.value;
        const date = new Date();
        const year = date.getFullYear();
        console.log(year, e);
        console.log(this.date, 'lol date');
        // this.date = today;
      },
      decreaseDate() {
        //
      },
      increaseDate() {
        //
      },
    },
  };
</script>

<style scoped>
  .form {
    @apply rounded-md shadow-md bg-white;
    @apply dark:text-white dark:bg-gray-800;
  }
  .form__description {
    @apply focus:ring-teal-500 focus:border-teal-500 sm:text-sm block w-full border-gray-300 rounded-md shadow-sm;
  }
  .button {
    @apply hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm;
  }
</style>
