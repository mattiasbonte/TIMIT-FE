<template>
  <div class="main">
    <TheHeader />
    <Container class="flex-grow pt-8">
      <router-view
        v-slot="{
          Component,
          route,
        }"
      >
        <transition :name="route.meta.transition || 'slide_right'" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </Container>
    <TheFooter class="flex-shrink-0" />
  </div>
</template>

<script>
  import TheHeader from './components/UI/TheHeader.vue';
  import TheFooter from './components/UI/TheFooter.vue';
  import Container from './components/UI/Container.vue';

  export default {
    name: 'App',
    components: {
      TheHeader,
      TheFooter,
      Container,
    },
    created() {
      this.fetchLocalStorageProjects();
    },
    methods: {
      fetchLocalStorageProjects() {
        // Get Projects from localStorage if they exist
        if (localStorage.getItem('projects')) {
          this.$store.commit({
            type: 'setProjects',
            fetched_projects: JSON.parse(localStorage.getItem('projects')),
          });
        }
      },
      saveProjectsLocally() {
        // Save Projects to localStorage
        const projects = this.$store.getters.getProjects;
        localStorage.setItem('projects', JSON.stringify(projects));
        return true;
      },
    },
    watch: {
      // Watch state for changes and save them local
      '$store.state.projects'() {
        // this.saveProjectsLocally();
      },
    },
  };
</script>

<style>
  .main {
    @apply bg-indigo-50 dark:bg-blue-gray-700 dark:text-white box-border flex flex-col min-h-full;
  }
</style>
