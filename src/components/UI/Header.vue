<template>
  <nav class="dark:bg-gray-800 bg-white shadow">
    <div class="sm:px-6 lg:px-8 container px-2 mx-auto">
      <div class="relative flex items-center justify-between h-16">
        <!-- MENU DROPDOWN TOGGLE -->
        <div class="sm:hidden absolute inset-y-0 left-0 flex items-center">
          <button
            @click="menu_dropdown = !menu_dropdown"
            class="dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:text-gray-400 hover:bg-gray-200 inline-flex items-center justify-center p-2 text-gray-600 rounded-md"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>

            <!-- ICON ACTIVE -->
            <svg
              :class="menu_dropdown ? 'hidden' : 'block'"
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <!-- ICON INACTIVE -->
            <svg
              class="w-6 h-6"
              :class="menu_dropdown ? 'block' : 'hidden'"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <!-- LOGO & TITLE -->
        <div
          class="sm:items-stretch sm:justify-start flex items-center justify-center flex-1"
        >
          <div
            class="bg-gradient-to-r from-light-blue-400 hover:shadow-md sm:hover:scale-101 hover:scale-105 to-teal-600 dark:border-white flex items-center flex-shrink-0 transform bg-gray-700 border border-gray-800 rounded-full shadow-md cursor-wait"
          >
            <svg
              class="w-10 h-10 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p
              class="sm:inline hidden ml-2 mr-6 font-mono text-2xl italic font-black text-white"
            >
              TIMIT
            </p>
          </div>
          <div class="sm:flex sm:ml-6 items-center hidden">
            <div class="flex items-center space-x-4">
              <!-- NAV HOME WIDE -->
              <router-link
                to="/home"
                exact
                title="Navigate Home"
                class="dark:over:text-white dark:hover:bg-gray-700 dark:text-gray-300 hover:bg-gray-100 flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  ></path>
                </svg>
                <span>Home</span>
              </router-link>

              <!-- NAV PROJECTS WIDE -->
              <router-link
                to="/overview"
                exact
                title="See all Projects"
                class="dark:over:text-white dark:hover:bg-gray-700 dark:text-gray-300 hover:bg-gray-100 flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  ></path>
                </svg>
                <span>Projects</span>
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="sm:static sm:inset-auto sm:ml-6 sm:pr-0 absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <!-- BELL BUTTON-ICON -->
          <button
            class="dark:hover:text-white hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white dark:bg-gray-800 dark:text-gray-400 p-1 text-gray-500 bg-white rounded-full"
          >
            <span class="sr-only">View notifications</span>

            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          <!-- PROFILE DROPDOWN TOGGLE -->
          <div
            class="relative ml-3"
            @click="profile_dropdown = !profile_dropdown"
          >
            <div>
              <button
                class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white dark:hover:border-white hover:border-gray-800 dark:bg-gray-800 flex text-sm bg-white border border-transparent rounded-full"
                id="user-menu"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>

            <ProfilePopup :toggle="profile_dropdown" />
          </div>
        </div>
      </div>
    </div>

    <!-- DROPDOWN MENU SHOW/HIDE -->
    <div :class="menu_dropdown ? 'block' : 'hidden'" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- NAV HOME MENU -->
        <router-link
          to="/home"
          exact
          title="Navigate Home"
          class="dark:hover:text-white dark:hover:bg-gray-700 dark:text-gray-300 dark:border-transparent hover:text-black hover:bg-gray-100 flex items-center px-3 py-2 space-x-2 text-base font-medium text-gray-700 rounded-md"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            ></path>
          </svg>
          <span>Home</span>
        </router-link>

        <!-- NAV PROJECTS MENU -->
        <router-link
          to="/overview"
          exact
          title="See all Projects"
          class="dark:hover:text-white dark:hover:bg-gray-700 dark:text-gray-300 dark:border-transparent hover:text-black hover:bg-gray-100 flex items-center px-3 py-2 space-x-2 text-base font-medium text-gray-700 rounded-md"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            ></path>
          </svg>
          <span>Projects</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  import ProfilePopup from './ProfilePopup.vue';

  export default {
    components: {
      ProfilePopup,
    },
    data() {
      return {
        profile_dropdown: false,
        menu_dropdown: false,
      };
    },
  };
</script>

<style scoped>
  .active,
  .active-exact {
    @apply dark:bg-gray-900 bg-gray-200;
  }
</style>
