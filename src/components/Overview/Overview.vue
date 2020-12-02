<template>
  <div class="space-y-8">
    <div class="space-y-3 text-center">
      <transition name="slide_up" mode="out-in">
        <button
          @click="add_project = !add_project"
          v-if="!add_project"
          class="add__project__button"
        >
          NEW PROJECT
        </button>
        <AddProjectForm v-else class="max-w-5xl mx-auto" />
      </transition>
    </div>

    <div class="space-y-3">
      <h1
        class="dark:text-white text-xl italic font-thin text-center text-black"
      >
        Overview
      </h1>
      <div class="preview__grid">
        <Preview
          v-for="project in this.$store.getters.getProjects"
          :key="project.id"
          :project_id="project.id"
          :description="project.description"
          @click="navToProject(project.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import AddProjectForm from './components/AddProjectForm.vue';
  import Preview from './components/Preview.vue';

  export default {
    components: {
      AddProjectForm,
      Preview,
    },
    data() {
      return {
        add_project: false,
      };
    },
    methods: {
      navToProject(id) {
        this.$router.push(`/projects/${id}`);
      },
    },
  };
</script>

<style scoped>
  .preview__grid {
    @apply max-w-5xl mx-auto;
    @apply grid gap-3 grid-cols-1 lg:grid-cols-2;
  }
  .add__project__button {
    @apply max-w-5xl;
    @apply dark:text-white;

    @apply px-3 py-6 shadow-sm rounded-md text-center font-bold text-white w-full;
    @apply sm:py-4;
    @apply md:max-w-xs;
    @apply border border-transparent;
    @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;

    @apply bg-gradient-to-r from-light-blue-600 to-teal-600;
    @apply hover:from-light-blue-600 hover:to-teal-700;
  }
</style>
