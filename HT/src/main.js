import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from "vue-resource"
import ElementUi from "element-ui"
import "element-ui/lib/theme-default/index.css"
//引入jquery
import $ from 'jquery'

//组件
import Bindex from "./view/Bindex.vue"
import Bdesign from "./view/Bdesign.vue"
import Bconfig  from  "./view/Bconfigure.vue"
import Mtemplate from "./view/Mtemplate.vue"

Vue.use(ElementUi)
Vue.use(VueRouter)
Vue.use(VueResource)


var  router=new VueRouter({
     routes:[
        {path:"/department/index",component:Bindex},
        {path:"/department/design",component:Bdesign},
        {path:"/department/config",component:Bconfig},
        {path:"/department/Mtemplate",component:Mtemplate}

     ]
})


new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
