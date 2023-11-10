import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import { Iconify } from './plugins/iconify';
import './style.css';

createApp(App).use(createPinia()).use(Iconify).mount('#app');
