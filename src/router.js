import Router from 'vue-router'
import Vue from 'vue'
import home from './App'
import sample from './components/sample'
import sample2 from './components/sample/sample1'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/sample'},
        { path: '/home', component: home},
        { path: '/sample', component: sample},
        { path: '/sample2', component: sample2}

    ]
})