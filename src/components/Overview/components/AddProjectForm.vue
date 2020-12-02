<template>
  <form
    @submit.prevent="submitNewProjectForm"
    class="form"
    :class="description ? 'lg:space-x-3 space-y-3' : ''"
  >
    <!-- FEATURE DESCRIPTION -->
    <input
      type="text"
      class="form__description"
      v-model="description"
      name="description"
      id="description"
      placeholder="Project Title..."
      title="Add a project title or description."
      required
    />

    <div
      class="sm:flex-row sm:space-y-0 sm:space-x-3 flex flex-col flex-grow space-y-3"
    >
      <div v-if="description" class="sm:w-1/2 md:w-auto flex space-x-3">
        <input
          v-model="hourly_rate"
          class="form__input"
          type="number"
          name="hourly_rate"
          id="hourly_rate"
          placeholder="Hourly Rate..."
          title="Add an hourly rate."
          required
        />
        <select
          v-model="currency"
          class="form__select"
          name="currency"
          id="currency"
          placeholder="EUR..."
          title="Select your currency."
          required
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
        title="Save new project."
      >
        <div class="flex items-center mx-auto space-x-1">
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
    </div>
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
    @apply flex flex-col justify-center;
    @apply border border-transparent;
    @apply lg:flex-row lg:items-stretch lg:space-y-0;
  }

  .form__description {
    @apply w-full px-3 py-6;
    @apply sm:py-3;
    @apply border-gray-300 rounded-md shadow-md outline-none;
    @apply hover:border-light-blue-600;
    @apply focus:ring-light-blue-600 focus:border-light-blue-600;
    /* dark */
    @apply dark:bg-gray-800;
    @apply dark:placeholder-gray-400;
    @apply dark:hover:border-white dark:hover:bg-gray-900;
    @apply dark:focus:ring-white dark:focus:border-white dark:focus:bg-gray-900;
  }

  .form__input {
    @apply flex w-1/2 p-3;
    @apply lg:w-40;
    @apply border-gray-300 rounded-md cursor-pointer;
    @apply hover:border-light-blue-600 outline-none hover:bg-gray-50;
    @apply focus:ring-light-blue-600 focus:border-light-blue-600;
    /* dark */
    @apply dark:bg-gray-800;
    @apply dark:placeholder-gray-400;
    @apply dark:hover:border-white dark:hover:bg-gray-900;
    @apply dark:focus:ring-white dark:focus:border-white dark:focus:bg-gray-900;
  }

  .form__select {
    @apply flex w-1/2 p-3;
    @apply lg:w-24;
    @apply border-gray-300 rounded-md cursor-pointer;
    @apply hover:border-light-blue-600 outline-none hover:bg-gray-50;
    @apply focus:ring-light-blue-600 focus:border-light-blue-600;
    /* dark */
    @apply dark:bg-gray-800;
    @apply dark:placeholder-gray-400;
    @apply dark:hover:border-white dark:hover:bg-gray-900;
    @apply dark:focus:ring-white dark:focus:border-white dark:focus:bg-gray-900;
  }

  .form__button {
    @apply flex flex-grow;
    @apply px-3 py-6 rounded-md;
    @apply sm:py-2 sm:w-1/2;
    @apply md:w-auto;
    @apply lg:w-auto;
    @apply text-white;
    @apply border border-transparent;
    @apply hover:bg-indigo-700 hover:shadow-lg;
    @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-600;
    /* dark */
    @apply dark:border-gray-300;
    @apply dark:hover:border-white;

    @apply bg-gradient-to-r from-light-blue-600 to-teal-600;
    @apply hover:from-light-blue-600 hover:to-teal-700;
  }
</style>
