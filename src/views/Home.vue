<template>
  <div>
    <div class="card">
      <div class="card__bot"></div>
      <div class="card__mid"></div>
      <div class="card__top">
        <!-- Welcome Message -->
        <h1
          class="dark:text-white -mb-2 text-lg italic font-thin text-center text-black"
        >
          Welcome to TIMIT <span class="not-italic">👋🏼</span>
        </h1>

        <!-- Text Content -->
        <p>
          The idea behind TIMIT started out of my own experience with keeping
          track of time for the projects I was building or assisting in for a
          client. Most clients want to see an overview of what I did and how
          long I worked on a specific feature. So mostly I wrote it down on some
          paper or inside my note app. Keeping track of all my projects became a
          bit messy. So that inspired me to start TIMIT.
        </p>

        <p>
          This experience has changed the way I look at web apps. It induced
          more respect for what other developers are creating. The process of
          finding a problem and building a solution for it looks simple, but was
          more complex than I thought. I first started to build the
          functionality in Veu.js, and when everything was working I attached
          the backend and database to it and finished it off by adding user
          authentication and Oauth ID.
        </p>

        <p>
          Being able to create a simple full stack app like this, after 6 months
          of hard work and dedication to learning coding from scratch, feels
          really good!
        </p>

        <p>Thanks for reading and talk soon,</p>

        <p>~Mattias</p>

        <div class="text-center">
          <router-link exact to="/overview">
            <button class="btn__base btn__try">
              <p>TRY IT</p>
            </button>
          </router-link>
        </div>

        <p class="text-xs">
          Create a project 👉🏼 Add a feature 👉🏼 Start working 👉🏼 Stop working 👉🏼
          Work some more 👉🏼 Complete Feature 👉🏼 Repeat ∞ 👉🏼 Send project
          overview to client 📤
        </p>
      </div>
    </div>
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
  .card {
    @apply relative;
  }
  .card__top {
    @apply relative max-w-prose mx-auto px-4;
    @apply font-extralight text-justify;
    @apply space-y-8 sm:bg-white rounded-sm sm:shadow-2xl;
    @apply sm:px-20 sm:py-10 sm:my-14 sm:rounded-3xl;
    @apply sm:dark:bg-gray-900;
  }
  .card__mid {
    @apply absolute max-w-prose mx-auto hidden transform;
    @apply rounded-3xl shadow-lg inset-0;
    @apply sm:block sm:-rotate-6;
    @apply bg-gradient-to-r from-light-blue-500 to-teal-600;
  }
  .card__bot {
    @apply absolute max-w-prose mx-auto hidden transform;
    @apply rounded-3xl shadow-lg inset-0;
    @apply sm:block sm:-rotate-12;
    @apply bg-gradient-to-r from-amber-500 to-purple-500;
  }
  .btn__try {
    @apply rounded-md;
  }
</style>
