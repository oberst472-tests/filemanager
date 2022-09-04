import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/scss/main.scss'
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
const pinia = createPinia()

import App from './App.vue'

createApp(App).use(pinia).use(VCalendar, {}).mount('#app')
