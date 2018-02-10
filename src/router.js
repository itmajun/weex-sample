import Router from 'vue-router'
import Vue from 'vue'
import home from './pages/home'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: home}

    ]
})