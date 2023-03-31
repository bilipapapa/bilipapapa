import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  createMemoryHistory,
  RouteRecordRaw,
  NavigationGuardNext,
} from 'vue-router'

const base = import.meta.env.VITE_BASE_URL

/* 页面路由 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: () => import('@/views/Index.vue'),
    children: [
      { path: '/home', name: 'home', component: () => import('@/views/home/index.vue') },
      { path: '/:nofound(.*)', component: () => import('@/views/404.vue') },
    ],
  },
]

/* 创建路由 */
const router = createRouter({
  // 从环境变量读取路由模式
  history: import.meta.env.VITE_ROUTER_MODE === 'history' ? createWebHistory(base) : createWebHashHistory(base),
  routes: routes,
})

/* 路由守卫 */
router.beforeEach((to, from, next) => {
  next()
})

export default router
