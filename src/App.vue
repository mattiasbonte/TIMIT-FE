<template>
  <div class="main">
    <TheHeader class="" />
    <Container class="flex-grow">
      <router-view v-slot="{ Component, route }">
        <transition
          :name="route.meta.transition || 'slide_right'"
          mode="out-in"
        >
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
  };
</script>

<style>
  .main {
    @apply bg-indigo-50 dark:bg-blue-gray-700 dark:text-white box-border flex flex-col min-h-full;
  }
</style>
