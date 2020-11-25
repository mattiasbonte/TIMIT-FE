import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/tailwind.css';

// Global Components

// App
createApp(App).use(store).use(router).mount('#app');
