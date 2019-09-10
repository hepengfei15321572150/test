// 路由守卫
import router from './router';

// 白名单,直接跳过,不经过检验
const whiteList = ['/login'];

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    console.log(token, to.path, from.path)

    if (to.path === from.path) {
        return false;
    }
    // 是否已经登录过
    if (token) {
        // 已经登陆过

        // 如果为登录页,那么就 直接去首页
        if (to.path === '/login') {
            next({ path: '/' });
        } else {
            next();
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            // 是白名单的页
            next({ path: to.path });
        } else {
            next({ path: `/login?redirect=${to.path}` });
        }
    }
});

