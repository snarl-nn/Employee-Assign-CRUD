import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './input.css'
import './output.css'


createApp(App).use(router).mount('#app')
