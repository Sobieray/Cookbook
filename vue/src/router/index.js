import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App'
import Index from '@/components/Index'
import Recipe from '@/components/Recipe'
import Recipes from '@/components/Recipes'
import NotFound from '@/components/NotFound'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/recipes',
      component: Index,
      children: [
        {
          path: '',
          component: Recipes
        },
        {
          path: ':name',
          component: Recipe
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
