import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4e28e860 = () => interopDefault(import('..\\pages\\user\\blog.vue' /* webpackChunkName: "pages/user/blog" */))
const _8f7ed23c = () => interopDefault(import('..\\pages\\user\\new.vue' /* webpackChunkName: "pages/user/new" */))
const _e4f3224a = () => interopDefault(import('..\\pages\\user\\project.vue' /* webpackChunkName: "pages/user/project" */))
const _237e489b = () => interopDefault(import('..\\pages\\user\\social.vue' /* webpackChunkName: "pages/user/social" */))
const _7d5ddb02 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/user/blog",
    component: _4e28e860,
    name: "user-blog"
  }, {
    path: "/user/new",
    component: _8f7ed23c,
    name: "user-new"
  }, {
    path: "/user/project",
    component: _e4f3224a,
    name: "user-project"
  }, {
    path: "/user/social",
    component: _237e489b,
    name: "user-social"
  }, {
    path: "/",
    component: _7d5ddb02,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
