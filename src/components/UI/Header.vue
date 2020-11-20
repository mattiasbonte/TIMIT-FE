<template>
  <header class="apply-header">
    <div class="flex space-x-2">
      <!-- HOME -->
      <router-link
        to="/home"
        exact
        class="apply-nav-item"
        title="Navigate Home"
      >
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
          ></path>
        </svg>
        <span class="sm:inline hidden">Home</span>
      </router-link>
      <!-- PROJECTS -->
      <router-link
        to="/overview"
        exact
        class="apply-nav-item"
        title="See all Projects"
      >
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          ></path>
        </svg>
        <span class="sm:inline hidden">Projects</span>
      </router-link>
    </div>
    <!-- LOGOUT -->
    <router-link to="/logout" exact class="apply-nav-item" title="Log Out">
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="sm:inline hidden">Logout</span>
    </router-link>
  </header>
</template>

<script>
  export default {};
</script>

<style scoped>
  .apply-header {
    @apply container p-2 mx-auto;
    @apply flex flex-row flex-wrap justify-between;
    @apply py-4;
  }

  .apply-nav-item {
    @apply shadow-md rounded-xl bg-white text-black;
    @apply flex space-x-1;
    @apply p-2;
    @apply cursor-pointer transform;
    @apply bg-gradient-to-r hover:from-blue-500 hover:to-teal-600;
    @apply hover:text-white hover:shadow-lg hover:scale-105;
  }
</style>
