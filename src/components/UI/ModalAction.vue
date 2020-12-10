<template>
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div
      class="sm:block sm:p-0 flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center"
    >
      <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="sm:inline-block sm:align-middle sm:h-screen hidden"
        aria-hidden="true"
        >&#8203;</span
      >
      <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
      <div
        class="sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="sm:flex sm:items-start">
          <div
            class="sm:mx-0 sm:h-10 sm:w-10 flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full"
          >
            <!-- Heroicon name: exclamation -->
            <svg
              class="w-6 h-6 text-red-600"
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
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div class="sm:mt-0 sm:ml-4 sm:text-left mt-3 text-center">
            <h3
              class="text-lg font-medium leading-6 text-gray-900"
              id="modal-headline"
            >
              Delete Project
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Are you sure you want to delete your project? All of your data
                will be permanently removed from our servers forever. This
                action cannot be undone.
              </p>
            </div>
          </div>
        </div>
        <div class="sm:mt-4 sm:flex sm:flex-row-reverse mt-5">
          <button
            type="button"
            class="hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm"
          >
            Delete
          </button>
          <button
            type="button"
            class="hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style></style>
