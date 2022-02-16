import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import store from './store/index'
import VueRouter from 'vue-router';
import Todos from './components/Todos'
import AddTodo from "@/components/AddTodo";
import EditTodo from "@/components/EditTodo";
import AddUser from "@/components/AddUser";
import UserList from "@/components/UserList";
import EditUser from "@/components/EditUser";

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path:'/',component: Todos},
  {path:'/addTodo/',component: AddTodo},
  {path:'/editTodo/:index',component: EditTodo},
  {path:'/addUser/',component: AddUser},
  {path:'/userList/',component: UserList},
  {path:'/editUser/:id',component: EditUser},
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
