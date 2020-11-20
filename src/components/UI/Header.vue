<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl sm:px-6 lg:px-8 px-2 mx-auto">
      <div class="relative flex items-center justify-between h-16">
        <div class="sm:hidden absolute inset-y-0 left-0 flex items-center">
          <!-- MENU DROPDOWN TOGGLE -->
          <button
            @click="menu_dropdown = !menu_dropdown"
            class="hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white inline-flex items-center justify-center p-2 text-gray-400 rounded-md"
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
        <div
          class="sm:items-stretch sm:justify-start flex items-center justify-center flex-1"
        >
          <div class="flex items-center flex-shrink-0">
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
            <p class="sm:inline hidden m-3 font-extrabold text-white">TIMIT</p>
          </div>
          <div class="sm:flex sm:ml-6 items-center hidden">
            <div class="flex items-center space-x-4">
              <!-- NAV HOME WIDE -->
              <router-link
                to="/home"
                exact
                title="Navigate Home"
                class="hover:text-white hover:bg-gray-700 flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md"
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
                class="hover:text-white hover:bg-gray-700 flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md"
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
            class="hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white p-1 text-gray-400 bg-gray-800 rounded-full"
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
                class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:border-white flex text-sm bg-gray-800 border border-transparent rounded-full"
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

            <!-- PROFILE DROPDOWN SHOW/HIDE -->
            <div
              v-if="profile_dropdown"
              class="ring-1 ring-black ring-opacity-5 absolute right-0 z-50 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <!-- PROFILE DROPDOWN SETTINGS -->
              <router-link
                to="/settings"
                class="hover:bg-gray-100 flex items-center justify-between px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                ><span>Settings</span>
                <svg
                  class="inline w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </router-link>

              <!-- PROFILE DROPDOWN SIGNOUT -->
              <router-link
                to="/logout"
                class="hover:bg-gray-100 flex items-center justify-between px-4 py-2 text-sm text-gray-700"
                role="menuitem"
              >
                <span>Sign out</span>
                <svg
                  class="inline w-5 h-5"
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
              </router-link>
            </div>
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
          class="hover:text-white hover:bg-gray-700 flex items-center px-3 py-2 space-x-2 text-base font-medium text-gray-300 rounded-md"
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
          class="hover:text-white hover:bg-gray-700 flex items-center px-3 py-2 space-x-2 text-base font-medium text-gray-300 rounded-md"
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
  export default {
    data() {
      return {
        profile_dropdown: false,
        menu_dropdown: false,
      };
    },
  };
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

  .active,
  .active-exact {
    @apply bg-gray-900;
  }
</style>
