import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: localStorage.city || '北京'
    },
    getters: {
        double(state) {
            return state.city + ' ' + state.city;
        }  
    },
    mutations: {
        changeCity(state, city) {
            state.city = city;
            localStorage.city = city;
        }
    }
})