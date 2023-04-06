import { defineConfig } from 'vite'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import DefineOptions from 'unplugin-vue-define-options/dist/vite'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //配置vueI18n
    vueI18n({
      include: path.resolve(__dirname, 'src/lang/**')
    }),
    DefineOptions(),  // 简化命名组件的插件
    AutoImport({
      imports: ['vue'], // 加上后不用写import { ref } from 'vue'了
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver(), AntDesignVueResolver()]
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 配置别名
    },
  },
  server: {
    port: 6060,
  },
})
