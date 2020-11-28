<template>
  <!-- STOP FORM -->
  <form v-if="toggleStopForm" @submit.prevent="stopSegment" class="">
    <!-- STOP TIME -->
    <label class="form__label" for="stop_time">{{ stop_day }}</label>
    <select
      v-model="stop_time"
      class="form__select"
      name="stop_time"
      id="stop_time"
      required
    >
      <option
        v-for="time_stamp in time_stamps"
        :key="time_stamp"
        :value="time_stamp"
        :selected="time_stamp === stop_time"
      >
        {{ time_stamp }}
      </option>
    </select>

    <!-- SUBMIT START -->
    <button
      type="submit"
      class="form__button"
      name="stop_submit"
      id="stop_submit"
    >
      STOP
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
        stop_date: dayjs().format('YYYY-MM-DD'),
        stop_day: dayjs().format('dd'),
        stop_time: this.calcClosestTimeStamp('stop'),
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

        // output timestamp format "hh:mm"
        return `${hours}:${minutes}`;
      },
      stopSegment() {
        // Save stop date & time inside store
        this.$store.commit({
          type: 'stopSegment',
          project_id: this.project_id,
          feature_id: this.feature_id,
          segment_id: this.segment_id,
          stop_date: this.stop_date,
          stop_time: this.stop_time,
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
    },
  };
</script>

<style scoped>
  .form__label {
    @apply cursor-pointer;
  }
  .form__select {
    @apply p-0 pr-7 bg-transparent border-transparent outline-none appearance-none;
    @apply cursor-pointer;
    @apply focus:border-transparent focus:ring-transparent;
  }

  .form__button {
    @apply px-1 text-center shadow-sm rounded-md;
    @apply text-white bg-indigo-600;
    @apply border border-transparent;
    @apply hover:bg-indigo-700;
    @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
  }
</style>
