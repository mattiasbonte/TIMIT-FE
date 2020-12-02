<template>
  <div
    class="md:max-w-prose font-extralight w-full mx-auto space-y-10 text-justify"
  >
    <!-- Welcome Message -->
    <h1
      class="dark:text-white -mb-2 text-lg italic font-thin text-center text-black"
    >
      Welcome <span class="not-italic">👋🏼</span>
    </h1>

    <!-- Text Content -->
    <p>
      The idea behind TIMIT started out of my own experience with keeping track
      of time for the projects I was building or assisting in for a client. Most
      clients want to see an overview of what I did and how long I worked on a
      specific feature. So mostly I wrote it down on some paper or inside my
      note app. Keeping track of all my projects became a bit messy. So that
      inspired me to start TIMIT.
    </p>

    <p>
      This experience has changed the way I look at web apps. It induced more
      respect for what other developers are creating. The process of finding a
      problem and building a solution for it looks simple, but was more complex
      than I thought. I first started to build the functionality in Veu.js, and
      when everything was working I attached the backend and database to it and
      finished it off by adding user authentication and Oauth ID.
    </p>

    <p>
      Being able to create a simple full stack app like this, after 6 months of
      hard work and dedication to learning coding from scratch, feels really
      good!
    </p>

    <p>Thanks for reading and talk soon,</p>

    <p class="font-thin">~Mattias</p>

    <div class="text-center">
      <router-link exact to="/overview">
        <button class="button">
          <p>TRY IT</p>
        </button>
      </router-link>
    </div>

    <p class="text-xs">
      Create a project 👉🏼 Add a feature 👉🏼 Start working 👉🏼 Stop working 👉🏼 Work
      some more 👉🏼 Complete Feature 👉🏼 Repeat ∞ 👉🏼 Send project overview to
      client 📤
    </p>
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

<style scoped>
  .button {
    @apply p-2 font-bold text-center text-white rounded-md shadow-md;
    @apply bg-gradient-to-r from-light-blue-500 to-teal-600;
    @apply hover:from-light-blue-600 hover:to-teal-700;
  }
</style>
