<template>
  <div class="space-y-16">
    <!-- Welcome Message -->
    <h1
      class="dark:text-white -mb-2 text-xl italic font-thin text-center text-black"
    >
      Welcome {{ getUserName }} <span class="not-italic">👋🏼</span>
    </h1>

    <!-- Text Content -->
    <div
      class="md:max-w-prose font-extralight w-full mx-auto space-y-10 text-justify"
    >
      <p>
        The idea behind TIMIT started out of my own experience with keeping
        track of time for the projects I was building or assisting in for a
        client. Most clients want to see an overview of what I did and how long
        I worked on a specific feature. So mostly I wrote it down on some paper
        or inside my note app. Keeping track of all my projects became a bit
        messy. So that inspired me to start TIMIT.
      </p>

      <p>
        This experience has changed the way I look at web apps. It induced more
        respect for what other developers are creating. The process of finding a
        problem and building a solution for it looks simple, but was more
        complex than I thought. I first started to build the functionality in
        Veu.js, and when everything was working I attached the backend and
        database to it and finished it off by adding user authentication and
        Oauth ID.
      </p>

      <p>
        Being able to create a simple full stack app like this, after 6 months
        of hard work and dedication to learning coding from scratch, feels
        really good!
      </p>

      <p>Thanks for reading and talk soon,</p>
      <p>~Mattias</p>

      <p class="font-bold text-center">
        <router-link exact to="/overview" class="hover:underline text-center"
          >TRY IT</router-link
        >
      </p>

      <!-- Image + Navigation -->
      <router-link exact to="/overview">
        <img
          class="max-w-3xl mx-auto"
          src="../assets/home_page_landing.svg"
          alt="kanban board illustration"
        />
      </router-link>
      <p class="text-xs">
        <router-link exact to="/overview" class="hover:underline"
          >Create a project</router-link
        >
        -> Add a feature -> Start working -> Stop working -> Work some more ->
        Complete Feature -> Repeat ∞ -> Send Overview To Client.
      </p>
    </div>
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
