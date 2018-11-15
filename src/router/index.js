// Import Vue and Vue Router source

import Vue from 'vue'
import Router from 'vue-router'

// Import component source

import Projects from '@/components/Projects'
import ProjectDetail from '@/components/ProjectDetail'
import About from '@/components/About'

// Instantiate Vue Router

Vue.use(Router)

// Define routes, reset scroll position

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/projects'
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/projects/:id',
      name: 'ProjectDetail',
      component: ProjectDetail,
      props: true
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
