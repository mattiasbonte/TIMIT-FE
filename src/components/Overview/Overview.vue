<template>
  <div class="space-y-8">
    <div class="space-y-3">
      <h1
        class="dark:text-white text-xl italic font-thin text-center text-black"
      >
        Add Project
      </h1>
      <AddProjectForm class="max-w-5xl mx-auto" />
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
      return {};
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
</style>
