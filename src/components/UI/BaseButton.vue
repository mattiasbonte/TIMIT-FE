<template>
  <div class="div">
    <slot></slot>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .div {
    @apply bg-blue-500 rounded-xl shadow-md text-center text-white p-2;
    @apply sm:rounded-md;
    @apply hover:shadow-lg border hover:border-black cursor-pointer;
  }
</style>
