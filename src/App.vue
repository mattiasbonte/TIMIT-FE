<template>
  <div class="apply-main">
    <TheHeader class="" />
    <Container class="flex-grow">
      <router-view></router-view>
    </Container>
    <TheFooter class="flex-shrink-0" />
  </div>
</template>

<script>
  import TheHeader from './components/UI/TheHeader.vue';
  import TheFooter from './components/UI/TheFooter.vue';
  import Container from './components/UI/Container.vue';
  import Overview from './components/Overview/Overview.vue';

  export default {
    name: 'App',
    components: {
      TheHeader,
      TheFooter,
      Container,
      Overview,
    },
  };
</script>

<style scoped>
  .apply-main {
    @apply bg-indigo-50 dark:bg-blue-gray-700 dark:text-white box-border flex flex-col h-full;
  }
</style>
