import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/login/Login';
import ResetPassword from '@/views/resetPassword/ResetPassword';
import Drinks from '@/views/drinks';
import AdminDrinks from '@/views/admin/AdminDrinks';
import Structure from '@/components/clubhouseStructure';

Vue.use(VueRouter);

const routes = [
  {
    path: '/achvb/login',
    name: 'login',
    component: Login,
    meta: {
      public: true, // Allow access to even if not logged in
      onlyWhenLoggedOut: true,
    },
  },
  {
    path: '/achvb/resetPassword',
    name: 'resetPassword',
    component: ResetPassword,
  },
  {
    path: '/achvb',
    component: Structure,
    children: [
      {
        path: 'drinks',
        name: 'drinks',
        component: Drinks,
      },
      {
        path: 'admin',
        name: 'adminDrinks',
        component: AdminDrinks,
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
