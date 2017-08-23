import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from "vue-resource"
import ElementUi from "element-ui"
import "element-ui/lib/theme-default/index.css"

//组件
import Rlist1 from "./view/radioList1.vue"
import Rlist2 from "./view/radioList2.vue"
import Dwork from "./view/departmentWork.vue"
import Donce from "./view/departmentOnce.vue"
import Dfunding from "./view/departmentFunding.vue"
import Dsystem from "./view/departmentSystem.vue"
import Pawards from "./view/projectsAwards.vue"
import Ptask from "./view/projectsTask.vue"
import Ppersonage from "./view/performancePersonage.vue"
import Pprojects from "./view/performanceProjects.vue"
import Ktraining from "./view/knowledgeTraining.vue"
import Ksummary from "./view/knowledgeSummary.vue"
import Steam from "./view/settingTeam.vue"







Vue.use(ElementUi)
Vue.use(VueRouter)
Vue.use(VueResource)


var  router=new VueRouter({
     routes:[
      {
      path: '/',
      component: Dwork
    },
    {
      path: '/radio/list1',
      component: Rlist1
    },
    {
      path: '/radio/list2',
      component: Rlist2
    } ,
   {
      path: '/department/work',
      component: Dwork
   },
   
   {
      path: '/department/once',
      component: Donce
   },
      {
      path: '/department/funding',
      component: Dfunding
   },    
   {
      path: '/department/system',
      component: Dsystem
   },
    {
      path: '/projects/task',
      component: Ptask
   },
   {
      path: '/projects/awards',
      component: Pawards
   },

   {
      path: '/performance/personage',
      component: Ppersonage
   },
   {
      path: '/performance/projects',
      component: Pprojects
   },
   {
      path: '/knowledge/summary',
      component: Ksummary
   },
   {
      path: '/knowledge/training',
      component: Ktraining
   },
   {
      path: 'setting/team',
      component: Steam
   },
     ]
})


new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
