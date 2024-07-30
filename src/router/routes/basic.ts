import { RouteRecordRaw } from 'vue-router'

/* 页面路由 */
export default <RouteRecordRaw[]>[
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: () => import('@/views/Index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/:nofound(.*)',
    component: () => import('@/views/404.vue'),
  },
]
