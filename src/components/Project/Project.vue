<template>
  <div class="space-y-8">
    <!-- ADD FEATURE & PROJECT DESCRIPTION -->
    <div class="space-y-3">
      <h1
        class="dark:text-white text-xl italic font-thin text-center text-black"
      >
        {{ project_description }}
      </h1>
      <FeatureStartForm
        class="max-w-5xl mx-auto"
        :project_id="this.project_id"
      />
    </div>

    <!-- FEATURES -->
    <div class="max-w-5xl mx-auto space-y-3">
      <h1
        class="dark:text-white text-xl italic font-thin text-center text-black"
      >
        Features
      </h1>
      <div class="space-y-3">
        <div v-if="getFeatures.length === 0" class="font-thin text-center">
          💡 Please add a feature...
        </div>
        <Feature
          v-for="feature in this.getFeatures"
          :key="feature.id"
          :project_id="this.project_id"
          :feature_id="feature.id"
          :description="feature.description"
          :segments="feature.segments"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import FeatureStartForm from './components/FeatureStartForm.vue';
  import Feature from './components/Feature.vue';

  export default {
    components: { FeatureStartForm, Feature },
    data() {
      return {
        project_id: this.$route.params.id,
        project_description: '',
      };
    },
    created() {
      this.project_description = this.getDescription;
    },
    computed: {
      getFeatures() {
        // Returns all the features of a specific project, project ID is send as payload
        return this.$store.getters.getFeatures(this.project_id);
      },
      getDescription() {
        return this.$store.getters.getProject(this.project_id).description;
      },
    },
  };
</script>

<style scoped>
  .project {
    @apply px-4 py-2 rounded-md shadow-md cursor-pointer;
    @apply bg-white hover:bg-gray-100;
    @apply border-black border-solid;
    @apply dark:text-black;
  }
</style>
