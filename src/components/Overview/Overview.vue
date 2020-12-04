<template>
  <div class="space-y-8">
    <div class="space-y-3 text-center">
      <transition name="slide_up" mode="out-in">
        <button
          @click="add_project = !add_project"
          v-if="!add_project"
          class="btn__base btn__new__project"
        >
          NEW PROJECT
        </button>
        <AddProjectForm v-else class="max-w-5xl mx-auto" />
      </transition>
    </div>

    <div class="space-y-3">
      <h1
        class="dark:text-white text-xl italic font-thin text-center text-black"
      >
        Overview
      </h1>
      <div class="preview__grid">
        <Preview
          v-for="project in this.$store.getters.getProjects"
          :key="project.id"
          :project_id="project.id"
          :description="project.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import AddProjectForm from './components/AddProjectForm.vue';
  import Preview from './components/Preview.vue';

  export default {
    components: {
      AddProjectForm,
      Preview,
    },
    data() {
      return {
        add_project: false,
      };
    },
  };
</script>

<style scoped>
  .preview__grid {
    @apply max-w-5xl mx-auto;
    @apply grid gap-3 grid-cols-1 lg:grid-cols-2;
  }
  .btn__new__project {
    @apply rounded-md;
    @apply md:max-w-xs;
  }
</style>
