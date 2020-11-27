<template>
  <div class="space-y-8">
    <FeatureForm />
    <div class="space-y-5">
      <Feature
        v-for="feature in this.getFeatures"
        :key="feature.id"
        :project_id="this.id"
        :feature_id="feature.id"
        :description="feature.description"
        :segments="feature.segments"
      />
    </div>
  </div>
</template>

<script>
  import FeatureForm from './components/FeatureForm.vue';
  import Feature from './components/Feature.vue';

  export default {
    components: { FeatureForm, Feature },
    data() {
      return {
        id: this.$route.params.id,
      };
    },
    computed: {
      getFeatures() {
        // Returns all the features of a specific project, project ID is send as payload
        return this.$store.getters.getFeatures(this.id);
      },
    },
  };
</script>

<style scoped>
  .project {
    @apply px-4 py-2 rounded-md shadow-md cursor-pointer;
    @apply bg-white hover:bg-gray-100;
    @apply border-black border-solid;

    /* dark */
    @apply dark:text-black;
  }
</style>
