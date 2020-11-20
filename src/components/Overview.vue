<template>
  <div class="p-4 space-y-6">
    <Project
      v-for="project in users[0].projects"
      :key="project.id"
      @click="navToProject(project.id)"
      :title="project.title"
    />
  </div>
</template>

<script>
  import { nanoid } from 'nanoid';
  import user_data from '../data.json';

  import Project from './Project/Project.vue';
  import Form from './Project/Feature/FeatureForm.vue';

  export default {
    components: {
      Project,
      Form,
    },
    data() {
      return {
        users: user_data,
      };
    },
    methods: {
      navToProject(id) {
        this.$router.push(`/projects/:${id}`);
      },
    },
  };
</script>

<style></style>
