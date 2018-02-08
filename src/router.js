import Router from 'vue-router'
import Vue from 'vue'
import home from './App'

Vue.use(Router)


export default new Router({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: home}
    ]
})