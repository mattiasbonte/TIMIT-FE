<template>
  <div class="project">Name:{{ name }} - {{ hours }}h</div>
</template>

<script>
  import Feature from './Feature.vue';
  export default {
    props: {
      name: { type: String, required: true },
      hours: { type: Number, required: true },
    },
  };
</script>

<style scoped>
  .project {
    @apply border-opacity-10 hover:border-blue-400 px-4 py-2 bg-white border border-black border-solid rounded-md shadow-md;
  }
</style>
