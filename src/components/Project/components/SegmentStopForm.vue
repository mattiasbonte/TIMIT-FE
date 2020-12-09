<template>
  <form v-if="toggleStopForm" @submit.prevent="stopNewSegment" class="form">
    <!-- Start Date / Time -->
    <input
      v-model="start.date"
      @change="start.day = setStartDay"
      class="form__input"
      type="date"
      name="start_date"
      title="Select Start Date"
      id="start_date"
      required
    />

    <div class="label__wrap">
      <label class="form__label" for="start_date" title="Change Start Date">{{
        start.day
      }}</label>

      <select
        v-model="start.time"
        class="form__select"
        title="Change Start Time"
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
    </div>

    <span class="self-center">👉🏼</span>

    <!-- Stop Date / Time -->
    <input
      v-model="stop.date"
      @change="stop.day = setStopDay"
      class="form__input"
      type="date"
      name="stop_date"
      title="Select Stop Date"
      id="stop_date"
      required
    />

    <div class="label__wrap">
      <label class="form__label" for="stop_date" title="Change Stop Date">{{
        stop.day
      }}</label>

      <select
        v-model="stop.time"
        class="form__select"
        title="Change Stop Time"
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
    </div>

    <!-- Submit Stop -->
    <button
      type="submit"
      class="btn__base btn__submit"
      name="stop_submit"
      id="stop_submit"
      title="Stop working and save segment"
    >
      SAVE
    </button>
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
        start: { date: '', time: '', day: '' },
        stop: { date: '', time: '', day: '' },
      };
    },
    created() {
      this.time_stamps = this.generateTimeStamps;
      // Get Start Data
      this.start.date = this.getStartDate;
      this.start.time = this.getStartTime;
      this.start.day = this.setStartDay;
      // Set Initial Stop Data
      this.stop.date = this.getStopDate;
      this.stop.time = this.calcClosestTimeStamp('stop');
      this.stop.day = this.setStopDay;
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

        // output timestamp format "hh:mm"
        return `${hours}:${minutes}`;
      },
      stopNewSegment() {
        // Save start and stop date & time in store
        this.$store.commit({
          type: 'stopNewSegment',
          project_id: this.project_id,
          feature_id: this.feature_id,
          segment_id: this.segment_id,
          start_date: this.start.date,
          start_time: this.start.time,
          stop_date: this.stop.date,
          stop_time: this.stop.time,
        });

        // Enable start form
        this.$store.commit('toggleStartForm', {
          id: this.project_id,
          disable: false,
        });

        // Hide stop form
        this.hide_stop_form = true;
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
      toggleStopForm() {
        // get segment from store and check if a stop_time is set
        const payload = {
          project_id: this.project_id,
          feature_id: this.feature_id,
          segment_id: this.segment_id,
        };

        // if no stop_time is set, show the stop form
        const stop_time = this.$store.getters.getSegment(payload).stop_time;
        if (!stop_time) return true;

        // when there is a stop time set, hide the stop form
        return false;
      },
      getSegment() {
        // Get segment's data from the store
        return this.$store.getters.getSegment({
          project_id: this.project_id,
          feature_id: this.feature_id,
          segment_id: this.segment_id,
        });
      },
      getStartDate() {
        return this.getSegment.start_date;
      },
      getStopDate() {
        if (this.getSegment.stop_date === '') {
          return dayjs().format('YYYY-MM-DD');
        }
        return this.getSegment.stop_date;
      },
      getStartTime() {
        if (this.getSegment.start_time === '') {
          return this.calcClosestTimeStamp('start');
        }
        return this.getSegment.start_time;
      },
      setStartDay() {
        return dayjs(this.start.date).format('ddd');
      },
      setStopDay() {
        return dayjs(this.stop.date).format('ddd');
      },
      stopDateIsBeforeStartDate() {
        if (
          dayjs(this.start.date).isBefore(dayjs()) &&
          dayjs().isSame(this.start.date, 'day')
        ) {
          return false;
        }
        return true;
      },
    },
    watch: {
      'start.date'() {
        // If the selected date is beyond today, select today's date instead
        if (dayjs(this.start.date).isAfter(dayjs())) {
          this.start.date = dayjs().format('YYYY-MM-DD');
        }
        this.start.day = this.setStartDay;
      },
      'stop.date'() {
        // If the selected date is beyond today, select today's date instead
        if (dayjs(this.stop.date).isAfter(dayjs())) {
          this.stop.date = dayjs().format('YYYY-MM-DD');
        }
        this.stop.day = this.setStopDay;
      },
    },
  };
</script>

<style scoped>
  .form {
    @apply flex items-stretch space-x-3 space-x-reverse text-center w-full;
    @apply sm:space-x-3;
  }

  .form__input {
    @apply hidden p-0 appearance-none;
    @apply cursor-pointer rounded-md bg-gray-100 border-transparent;
    @apply hover:bg-gray-200;
    @apply dark:bg-gray-700 dark:hover:bg-gray-600;
    /* SM */
    @apply sm:pl-2 sm:block;
  }

  .label__wrap {
    @apply cursor-pointer w-28 flex justify-between items-center;
    @apply rounded-md bg-gray-100 overflow-hidden;
    @apply dark:bg-gray-700;
  }
  .form__label {
    @apply pl-2 pr-1 py-5 rounded-l-md;
    @apply sm:py-3;
    @apply cursor-pointer;
    @apply hover:bg-gray-200;
    @apply dark:bg-gray-700 dark:hover:bg-gray-600;
  }
  .form__select {
    @apply p-0 pr-6 py-5 cursor-pointer rounded-r-md flex-grow;
    @apply sm:py-3;
    @apply bg-transparent border-transparent outline-none appearance-none;
    @apply hover:bg-gray-200;
    @apply focus:border-transparent focus:ring-transparent;
    @apply dark:bg-gray-700 dark:hover:bg-gray-600;
  }

  .btn__submit {
    @apply rounded-md w-auto flex-grow;
    @apply transform translate-x-2;
    @apply sm:translate-x-0;
  }
</style>
