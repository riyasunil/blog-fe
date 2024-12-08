import BlogDetail from '@/components/BlogDetail.vue'
import BlogList from '@/components/BlogList.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BlogList',
      component: BlogList,
    },
    {
      path: '/blog/:id',
      name: 'BlogDetail',
      component: BlogDetail,
      props:true
    },
  ],
})

export default router