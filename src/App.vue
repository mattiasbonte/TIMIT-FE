<template>
  <div
    class="bg-indigo-50 dark:bg-blue-gray-700 dark:text-white box-border flex flex-col h-full"
  >
    <Header class="" />
    <Container class="flex-grow">
      <router-view></router-view>
    </Container>
    <Footer class="flex-shrink-0" />
  </div>
</template>

<script>
  import Header from './components/UI/Header.vue';
  import Footer from './components/UI/Footer.vue';
  import Container from './components/UI/Container.vue';
  import Overview from './components/Overview.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      Container,
      Overview,
    },
  };
</script>
