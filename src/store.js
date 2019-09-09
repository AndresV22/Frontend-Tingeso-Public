import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        serverURL: 'http://localhost:8080',
        //serverURL: 'http://projecthunter.tk:8080/symbiose',
    }
})