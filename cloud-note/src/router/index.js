import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'


// import VueQuillEditor from 'vue-quill-editor'
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

Vue.use(Router)

const components = {
  layout: () => import('@/views/Layout'),
  index: () => import('@/views/index/index'),
  region: () => import('@/views/region'),
  writenote: () => import('@/views/writenote'),

}
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: components.layout,
      redirect:'index',
      children:[
      {
      path: '/index',
      meta:{
        title:'云笔记首页'
      },
      component:components.index
     },
      {
      path: '/region',
      meta:{
        title:'登录页'
      },
      component:components.region
     },
    {
      path: '/writenote',
      name: 'writenote',
      component:components.writenote
    }
      ]
    }
  ]
})
router.beforeEach((to,from,next)=>{ 
  Nprogress.start()
  next()
})
router.afterEach((to,from)=>{
  Nprogress.done()
})
export default router