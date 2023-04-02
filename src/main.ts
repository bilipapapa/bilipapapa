import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import '@/style/index.scss'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router).use(ElementPlus).mount('#app')
