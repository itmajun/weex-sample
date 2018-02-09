import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// step1
Vue.use(Vuex)

// step2
const store = new Vuex.Store({
    state: {
        version: '1.0'
    },
    actions,
    mutations,
    getters
})

//step3
export default store