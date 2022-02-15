import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import store from './store/index'
import VueRouter from 'vue-router';
import Todos from './components/Todos'
import AddTodo from "@/components/AddTodo";
import EditTodo from "@/components/EditTodo";

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path:'/',component: Todos},
  {path:'/addTodo/',component: AddTodo},
  {path:'/editTodo/:index',component: EditTodo},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
