<template>
  <div class="space-y-4">
    <!-- Welcome Message -->
    <h1
      class="dark:text-white -mb-2 text-xl italic font-thin text-center text-black"
    >
      Welcome {{ getUserName }}
    </h1>

    <!-- Image + Navigation -->
    <router-link exact to="/overview">
      <img
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
