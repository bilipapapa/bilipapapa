import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  // createMemoryHistory,
  // RouteRecordRaw,
  // NavigationGuardNext,
} from 'vue-router'

import { routes } from './routes'

const base = import.meta.env.VITE_BASE_URL

/* 创建路由 */
const router = createRouter({
  // 从环境变量读取路由模式
  history:
    import.meta.env.VITE_ROUTER_MODE === 'history'
      ? createWebHistory(base)
      : createWebHashHistory(base),
  routes: routes,
})

/* 路由守卫 */
router.beforeEach((to, from, next) => {
  next()
})

export default router
