import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../views/LoginView.vue'
import RegView from '../views/RegView.vue'
import UserPage from "@/views/UserPageView.vue";
import UserReview from "@/views/userReviewView.vue";
import loadData from "@/views/loadDataView";
import uploadResult from "@/views/loadDataResultView";
import loadDataResultView from "@/views/loadDataResultView";
import store from "@/store";
/* eslint-disable */
const routes = [
  {
    path: '/',
    name: 'userReview',
    component: UserReview,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
    
  },
  {
    path: '/reg',
    name: 'reg',
    component: RegView
  },
  {
    path: '/user:id',
    name: 'user',
    component: UserPage,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/upload',
    name: 'upload',
    component: loadData,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/uploadResult',
    name: 'uploadResult',
    component: uploadResult,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/checkData?:platform',
    name: 'checkData',
    component: loadDataResultView,
    meta: {
      requiresAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !(store.getters.isLogged)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    }
  }
})




export default router
