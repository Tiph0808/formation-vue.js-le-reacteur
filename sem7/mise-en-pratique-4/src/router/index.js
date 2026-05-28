import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '@/views/CreateView.vue'
import { inject } from 'vue'
import PaymentView from '@/views/PaymentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView,
      // Ajout des metafields pour protéger la route
      meta: { requireAuth: true },
    },
    {
      path: '/payment/:id',
      name: 'payment',
      component: PaymentView,
      props: true, // car cette route recoit un params
      meta: { requireAuth: true }, // car cette route est aussi protégée
    },
  ],
})

// On ajoute notre navigation guard
router.beforeEach((to, from) => {
  //console.log('to : ', to, 'from : ', from)
  // Pour accéder à mon fournisseur de dependance :
  const GlobalStore = inject('GlobalStore')

  if (to.meta.requireAuth && !GlobalStore.userToken.value) {
    alert('token necessaire')
    return { name: 'home' }
  }
})

export default router
