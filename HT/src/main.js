import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from "vue-resource"
import ElementUi from "element-ui"
import "element-ui/lib/theme-default/index.css"

//组件
import v1 from "./view/v1.vue"
import v2 from "./view/v2.vue"
import v3 from "./view/v3.vue"
import v4 from "./view/v4.vue"
import v from "./view/v.vue"

Vue.use(ElementUi)
Vue.use(VueRouter)
Vue.use(VueResource)


var  router=new VueRouter({
     routes:[
             {
      path: '/ace',
      component: v1
    },
     {
      path: '/acf',
      component: v2
    },
    {
      path: '/acg',
      component: v3
    },
    {
      path: '/ach',
      component: v4
    },
    {
      path: '/aci',
      component: v
    }
     ]
})


new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
