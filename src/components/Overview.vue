<template>
  <div
    class="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid grid-cols-1 gap-4"
  >
    <Preview
      v-for="project in users[0].projects"
      :key="project.id"
      :title="project.title"
      @click="navToProject(project.id)"
    />
  </div>
</template>

<script>
  import { nanoid } from 'nanoid';
  import user_data from '../data.json';

  import Preview from './Project/Preview.vue';

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

<style scoped></style>
