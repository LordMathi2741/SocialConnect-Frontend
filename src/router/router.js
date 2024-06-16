import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', component: () => import('../pages/the-home-page.component.vue')},
        {path:  '/login-page', component: () => import('../pages/the-login-page.component.vue')},
        {path:  '/profile', component: () => import('../pages/the-user-profile-page.component.vue')},
    ]
})

export default router