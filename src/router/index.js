import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import GroupView from "@/views/GroupView.vue";
import ItemView from '@/views/ItemView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/group/:id',
    name: 'group',
    component: GroupView
  },
  {
    path: '/item/:id',
    name: 'item',
    component: ItemView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
