import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GalleryView from '../views/GalleryView.vue'
import ContactView from '../views/ContactView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',      
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'ContactView',      
      component: ContactView,
    },
    {
      path: '/gallery',
      name: 'GalleryView',      
      component: GalleryView,
    },
  ],
})

export default router
