<template>
  <!-- PROFILE DROPDOWN SHOW/HIDE -->
  <div
    v-if="toggle"
    class="popup__frame"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu"
  >
    <!-- PROFILE DROPDOWN SETTINGS -->
    <router-link to="/settings" exact class="popup__link" role="menuitem"
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
    <router-link to="/logout" exact class="popup__link" role="menuitem">
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
</template>

<script>
  export default {
    props: { toggle: { type: Boolean, required: true } },
  };
</script>

<style scoped>
  .active,
  .active-exact {
    @apply bg-gray-200;
  }

  .popup__frame {
    @apply ring-1 ring-black ring-opacity-5 absolute right-0 z-50 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg;
  }
  .popup__link {
    @apply flex items-center justify-between px-4 py-4 text-sm text-gray-700;
    @apply sm:py-2;
    @apply hover:bg-gray-100;
  }
</style>
