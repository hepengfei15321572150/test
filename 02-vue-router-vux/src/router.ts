import Vue from 'vue';
// import Router from 'vue-router';
import Router from './k-vue-router';
import Home from './views/Home.vue';
import HomeChildren1 from './views/HomeChildren_1.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'children1',
                    component: HomeChildren1,
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
    ],
});
