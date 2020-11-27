<template>
  <div class="preview__grid">
    <Preview
      v-for="project in this.$store.getters.getProjects"
      :key="project.id"
      :description="project.description"
      @click="navToProject(project.id)"
    />
  </div>
</template>

<script>
  import Preview from './components/Preview.vue';

  export default {
    components: {
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
    @apply grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4;
  }
</style>
