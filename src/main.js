import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './main.css';

// Global Components

// App
const app = createApp(App).use(store);
app.use(router);

app.mount('#app');
