<template>
  <form @submit.prevent="submitNewProjectForm" class="form">
    <!-- FEATURE DESCRIPTION -->
    <input
      type="text"
      class="form__description"
      v-model="description"
      name="description"
      id="description"
      placeholder="New Project Title..."
      required
    />

    <div v-if="description" class="flex space-x-3">
      <input
        v-model="hourly_rate"
        class="form__input"
        type="number"
        name="hourly_rate"
        id="hourly_rate"
        placeholder="Rate..."
        required
      />
      <select
        v-model="currency"
        class="form__input"
        name="currency"
        id="currency"
        placeholder="EUR..."
        required
        selected="EUR"
      >
        <option>EUR</option>
        <option>GBP</option>
        <option>USD</option>
      </select>
    </div>

    <button
      v-if="description"
      type="submit"
      class="form__button"
      name="project_submit"
      id="project_submit"
    >
      <div class="flex mx-auto space-x-2">
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1H8a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1V9z"
            fill-rule="evenodd"
          ></path>
        </svg>
        <span>ADD</span>
      </div>
    </button>
  </form>
</template>

<script>
  import { nanoid } from 'nanoid';
  import dayjs from 'dayjs';

  export default {
    data() {
      return {
        description: '',
        hourly_rate: null,
        currency: 'EUR',
      };
    },
    methods: {
      submitNewProjectForm() {
        const project_id = nanoid();

        // Save Project in Store
        this.$store.commit({
          type: 'addNewProject',
          project: {
            id: project_id,
            description: this.description,
            project_start_date: dayjs()
              .format('YYYY-MM-DD')
              .toString(),
            disable_start_form: false,
            hourly_rate: this.hourly_rate,
            currency: this.currency,
            features: [],
          },
        });

        // Navigate to newly added project
        this.$router.push(`/projects/${project_id}`);
      },
    },
  };
</script>

<style scoped>
  .form {
    @apply p-3 rounded-md shadow-md bg-white;
    @apply flex flex-col justify-center space-y-3;
    @apply border border-transparent;
    @apply sm:flex-row sm:items-stretch sm:space-y-0 sm:space-x-3;
    @apply lg:space-y-0 lg:space-x-3 lg:flex-nowrap;
    @apply dark:bg-gray-900 dark:text-black dark:border-gray-600 dark:hover:border-gray-400;
  }

  .form__description {
    @apply w-full;
    @apply border-gray-300 rounded-md shadow-sm;
    @apply hover:border-indigo-500 ring-indigo-500;
    @apply focus:ring-indigo-500 focus:border-indigo-500;
  }

  .form__input {
    @apply flex w-1/2;
    @apply border-gray-300 rounded-md shadow-sm;
    @apply focus:ring-indigo-500 focus:border-indigo-500;
  }
  .form__button {
    @apply flex px-3 p-2 shadow-sm rounded-md;
    @apply text-white bg-indigo-600;
    @apply border border-transparent;
    @apply hover:bg-indigo-700;
    @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
  }
</style>
