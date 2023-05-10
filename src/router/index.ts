import { createWebHashHistory ,createRouter, RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        meta: {
            title:"首页"
        },
        hidden:false
    },
     {
        path: '/login',
        component:()=>import('@/views/login/index.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 路由守卫
// router.beforeEach((to, from, next) => {
    
//     const token = localStorage.getItem('token')
//     if (!token) {
//         if (to.name === 'login') {
//             next()
//         }
//         else {
//             next('/login')
//         }
//     } else {
//         // 断言类型
//         document.title = to.meta.title as string
//         next()
//     }
// })

export default router
