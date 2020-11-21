<template>
    <div class="apply-feature">
        <p>{{ title }}</p>
        <div v-for="segment in segments" :key="segment.id">
            Start {{ segment.start }} - End {{ segment.stop }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: { type: String, required: true },
            segments: { type: Array, required: true },
        },
    };
</script>

<style scoped>
    .apply-feature {
        @apply px-4 py-2 rounded-md shadow-md cursor-pointer;
        @apply bg-white hover:bg-gray-100;
        @apply dark:text-black;
    }
</style>
