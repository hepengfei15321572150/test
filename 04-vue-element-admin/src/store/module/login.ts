export default {
    namespaced: true,
    state: {
        token: localStorage.getItem('token'),
    },
    mutations: {
        SET_TOKEN(state: any, token: string) {
            state.token = token;
        },
    },
    getters: {

    },
    actions: {
        login({ commit }: any, params: any): any {
            const { username } = params;
            if (username === 'admin' || username === 'jeck') {
                localStorage.setItem('token', username);
                commit('SET_TOKEN', username);
                
                return true;
            } else {
                return false;
            }
        },
    },
};
