<template>
  <div class="space-y-10">
    <!-- Message  -->
    <h1 class="dark:text-white text-xl italic font-thin text-center text-black">
      Page not found... <span class="not-italic">😅</span>
    </h1>

    <!-- Image + Navigate Back -->
    <router-link exact to="/overview">
      <img
        class="max-w-xl mx-auto"
        src="../assets/404_page.svg"
        alt="Page not found illustration"
      />
    </router-link>
  </div>
</template>
