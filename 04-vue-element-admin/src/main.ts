import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

// 路由的权限判断
import './router-guard';

import './css/reset.css';


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
