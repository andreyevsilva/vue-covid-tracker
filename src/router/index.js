import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import(/*webpackChunkName: "home" */ '../views/Home.vue')
const Country = () => import(/*webpackChunkName: "countries" */ '../components/country/Country.vue')


  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/country',
    name: 'Country',
    component: Country //Ações do Usuário
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
