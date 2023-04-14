import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
/* UI */
import ElementPlus from 'element-plus'
import Antd from 'ant-design-vue'
/* style */
import 'element-plus/dist/index.css'
import 'ant-design-vue/dist/antd.css'
import '@/style/index.scss'
import '@/assets/fonts/iconfont.css'
/* js */
import  '@/assets/fonts/iconfont'

import zh from '@/lang/zh'
import en from '@/lang/en'
import ja from '@/lang/ja'

const app = createApp(App)
app.use(createPinia())

const i18n = createI18n({
  globalInjection: true, //全局生效
  locale: localStorage.getItem('locale') || 'zh',
  legacy: false,
  messages: {
    zh: zh,
    en: en,
    ja: ja
  }
})
app.use(router).use(ElementPlus).use(Antd).use(i18n).mount('#app')
