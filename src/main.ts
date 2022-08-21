import { createApp } from 'vue'
import './assets/scss/main.scss'
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';

import App from './App.vue'

createApp(App).use(VCalendar, {}).mount('#app')
