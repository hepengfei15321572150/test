import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout/index.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            components: require(/* webpackChunkName: "login"*/  '@/views/login'),
        },
        {
            path: '/home',
            component: Layout,
            redirect: '/home/index',
            children: [
                {
                    path: 'index',
                    components: require(/* webpackChunkName: "home"*/  '@/views/home'),
                }
            ]
        },
        {
            path: '/about',
            component: Layout,
            redirect: '/about/index',
            children: [
                {
                    path: 'index',
                    components: require(/* webpackChunkName: "about"*/  '@/views/about'),
                }
            ]
        }
    ],
});
