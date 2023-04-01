import { createApp } from 'vue'
import '@/style/index.scss'
import App from './App.vue'
import router from './router/index';

const app = createApp(App)

app.use(router).mount('#app')
