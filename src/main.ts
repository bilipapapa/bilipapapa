import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import '@/style/index.scss'
import 'element-plus/dist/index.css'
import { createI18n } from 'vue-i18n'
import zh from '@/lang/zh'
import en from '@/lang/en'
import ja from '@/lang/ja'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())

const i18n = createI18n({
  globalInjection: true, //全局生效
  locale: 'zh',
  legacy: false,
  messages: {
    zh: zh,
    en: en,
    ja: ja
  }
})
app.use(router).use(ElementPlus).use(i18n).mount('#app')
