<template>
  <div class="space-y-4">
    <Form />
    <div class="space-y-4">
      <Feature
        v-for="feature in this.features"
        :key="feature.id"
        :title="feature.title"
        :segments="feature.segments"
      />
    </div>
  </div>
</template>

<script>
  import Form from './components/FeatureForm.vue';
  import Feature from './components/Feature.vue';

  import user_data from '../../data.json';

  export default {
    components: { Form, Feature },
    data() {
      return {
        id: this.$route.params.id,
        features: [],
      };
    },
    computed: {
      printFeatures() {
        const features = user_data[0].projects.filter(
          (feature) => feature.id === this.id
        )[0].features;
        this.features = features;
      },
    },
    mounted() {
      this.printFeatures;
    },
  };
</script>

<style scoped>
  .apply-project {
    @apply px-4 py-2 rounded-md shadow-md cursor-pointer;
    @apply bg-white hover:bg-gray-100;
    @apply border-black border-solid;

    /* dark */
    @apply dark:text-black;
  }
</style>
