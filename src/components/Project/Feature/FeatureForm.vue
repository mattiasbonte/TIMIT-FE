<template>
    <div class="apply-form">
        <form action="">
            <label for="start_date">Start</label>
            <input type="datetime" name="start_date" id="start_date" required />
            <label for="stop_date">Stop</label>
            <input type="date" name="stop_date" id="stop_date" required />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
    import { Datetime } from 'vue-datetime';

    export default {
        components: { datetime: Datetime },
    };
</script>

<style scoped>
    .apply-form {
        @apply p-4;
        @apply bg-white rounded-md;
        @apply text-black;
    }
</style>
