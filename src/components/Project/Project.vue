<template>
  <div class="timit-project">Title: {{ title }}</div>
</template>

<script>
  import Form from './Feature/FeatureForm.vue';
  import Feature from './Feature/Feature.vue';

  export default {
    components: { Form, Feature },
    props: {
      title: { type: String, required: true },
    },
  };
</script>

<style scoped>
  .timit-project {
    @apply bg-white hover:bg-gray-200;
    @apply border border-opacity-10 hover:border-blue-400 border-black border-solid;
    @apply px-4 py-2 rounded-md shadow-md cursor-pointer;
    @apply dark:text-black;
  }
</style>
