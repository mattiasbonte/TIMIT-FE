import { createApp } from 'vue';

import './main.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

const app = createApp(App).use(store);

app.use(router);

app.mount('#app');
