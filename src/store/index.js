import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        pieceDuLapin : false,
    },
    mutations : {
        setPieceDuLapin(state,pieceDuLapin) {
            state.pieceDuLapin = pieceDuLapin;
        },
        initialiseStore(state) {
            if(localStorage.getItem('store')) {
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('store')))
                );
            }
        }
    }
})