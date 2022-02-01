import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookLibrary from '../views/BookLibrary.vue'
import SingleBookView from '../views/SingleBookView.vue'
import ReadingList from '../views/ReadingList.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/SingleBookView', name: 'SingleBookView', component: SingleBookView, props: true},
  {path: '/library', name: 'Library', component: BookLibrary},
  {path: '/readinglist', name: 'ReadingList', component: ReadingList, props: true},
  // {path: '/book/', component: BookItem},

  {
    path: '/readinglist',
    name: 'ReadingList',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // slipper lägga routerview i länkad view/komponent
    component: () => import(/* webpackChunkName: "about" */ '../views/ReadingList.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
