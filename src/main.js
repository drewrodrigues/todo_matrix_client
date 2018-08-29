import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Router)
Vue.component('icon', Icon)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Landing from './components/pages/Landing.vue'
import Matrix from './components/dashboard/Matrix.vue'
import Completed from './components/completed/Completed.vue'
import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'
const router = new Router({
  routes: [
    { path: '/',          name: 'Landing',   component: Landing },
    { path: '/dashboard', name: 'Dashboard', component: Matrix },
    { path: '/completed', name: 'Completed', component: Completed },
    { path: '/login', name: 'Login', component: Login },
    { path: '/sign-up', name: 'Sign Up', component: SignUp },
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
