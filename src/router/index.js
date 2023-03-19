import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ThreadShow from '@/views/ThreadShow.vue'
import NotFound from '@/views/NotFound.vue'
import sourceData from '@/data.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true,
      beforeEnter(to, from, next) {
        const threadExist = sourceData.threads.find(t => t.id === to.params.id)
        threadExist && next()
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
        })
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

export default router
