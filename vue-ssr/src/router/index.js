import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Child1 from '../views/about-child-1.vue'
import Child2 from '../views/about-child-2.vue'
import Company from '../views/Company.vue'
import Test1 from '../views/Test1.vue'
import Test2 from '../views/Test2.vue'


Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/company',
  },
  {
    path: '/home',
    name: 'Home',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    redirect: '/about/about-child-1',
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    component: About,
    children: [
      {
        path: 'about-child-1',
        name: 'about-child-1',
        // component: () => import(/* webpackChunkName: "child-1" */ '../views/about-child-1.vue')
        component: Child1
      },
      {
        path: 'about-child-2',
        name: 'about-child-2',
        // component: () => import(/* webpackChunkName: "child-2" */ '../views/about-child-2.vue')
        component: Child2
      },
    ]
  },
  {
    path: '/company',
    name: 'Company',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "company" */ '../views/Company.vue')
    component: Company
  },
  {
    path: '/test1',
    name: 'Test1',
    // component: () => import(/* webpackChunkName: "test1" */ '../views/Test1.vue')
    component: Test1
  },
  {
    path: '/test2',
    name: 'Test2',
    // component: () => import(/* webpackChunkName: "test2" */ '../views/Test2.vue')
    component: Test2
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  fallback: false,
});

export function createRouter() {
  return router;
}
