<template>
  <div class="preview__grid">
    <Preview
      v-for="project in users[0].projects"
      :key="project.id"
      :title="project.title"
      @click="navToProject(project.id)"
    />
  </div>
</template>

<script>
  import user_data from '../../data.json';

  import Preview from './components/Preview.vue';

  export default {
    components: {
      Preview,
    },
    data() {
      return {
        users: user_data,
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
    @apply grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4;
  }
</style>
