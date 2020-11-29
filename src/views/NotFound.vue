<template>
  <div class="space-y-10">
    <!-- Message  -->
    <h1 class="dark:text-white -mb-2 text-xl font-thin text-center text-black">
      Page not found... 😅
    </h1>

    <!-- Image + Navigate Back -->
    <router-link exact to="/overview">
      <img src="../assets/404_page.svg" alt="Page not found illustration" />
    </router-link>
  </div>
</template>
