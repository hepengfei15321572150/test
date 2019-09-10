import Vue from 'vue';
import Vuex from 'vuex';
import login from '@/store/module/login';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    modules: {
        login,
    },

    actions: {
        // login({ commit }: any): any {
        //     alert(1);
        // },
    },
});
