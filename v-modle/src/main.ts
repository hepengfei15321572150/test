import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// 添加$Alert方法
import Alert from './pages/alert/alert';
import AlertCom from './pages/alert/alert_component.vue';
Vue.prototype.$Alert = function (options: object = {}) {
    return Alert(AlertCom, options);
};

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
