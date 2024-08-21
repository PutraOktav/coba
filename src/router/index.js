import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Beranda.vue'
import About from '../views/Tentang.vue'
import Contact from '../views/Kontak.vue'
import Features from '../views/Fitur.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/tentang', name: 'About', component: About },
    { path: '/kontak', name: 'Contact', component: Contact },
    { path: '/fitur', name: 'Features', component: Features },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;