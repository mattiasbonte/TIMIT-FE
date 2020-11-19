<template>
  <div class="p-4 space-y-6">
    <Project
      v-for="project in projects"
      :key="project.id"
      :name="project.name"
      :hours="project.hours"
    />
  </div>
</template>

<script>
  import Project from './Project.vue';

  export default {
    name: 'Overview',
    components: {
      Project,
    },
    data() {
      return {
        projects: [
          {
            id: 1,
            name: 'Project feature 1',
            hours: 1,
          },
          {
            id: 2,
            name: 'Project feature 2',
            hours: 5,
          },
          {
            id: 3,
            name: 'Project feature 3',
            hours: 3,
          },
          {
            id: 4,
            name: 'Project feature 4',
            hours: 10,
          },
        ],
      };
    },
  };
</script>

<style></style>
