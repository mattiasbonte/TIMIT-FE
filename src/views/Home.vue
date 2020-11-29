<template>
  <div class="space-y-4">
    <!-- Welcome Message -->
    <h1
      class="dark:text-white -mb-2 text-xl italic font-thin text-center text-black"
    >
      Welcome {{ getUserName }} <span class="not-italic">👋🏼</span>
    </h1>

    <!-- Image + Navigation -->
    <router-link exact to="/overview">
      <img
        class="max-w-3xl mx-auto"
        src="../assets/home_page_landing.svg"
        alt="kanban board illustration"
      />
    </router-link>
  </div>
</template>

<script>
  export default {
    computed: {
      getUserName() {
        return this.$store.getters.getUser.first_name;
      },
    },
  };
</script>

<style></style>
