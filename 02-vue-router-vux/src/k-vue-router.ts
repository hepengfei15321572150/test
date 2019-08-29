let Vue: any = null;

class VueRouter {

    private _options: any = null;
    private routerMap: any = {};
    private app: any = null;

    constructor(options: any) {
        // 保存options
        this._options = options;

        // 对传入的router做映射
        this.routerMap = {};

        // 创建vue实例,为了动态响应路由的变化,地址栏变化的时候自动改变模板内容
        this.app = new Vue({
            data: {
                current: '/'
            }
        });
    }

    /*
        1. 创建onhashchange事件
        2. 创建路由映射关系,方便寻找到路由名称对应的组件模板
        3. 全局注册router-link 和 router-view组件
    */
    public init() {
        // 1. 监听地址变化
        this.pathHashChange();
        // 2. 路由映射关系
        this.createRouterMap();
        // 2. 全局组件
        this.createComponent();
    }

    // 1. 监听地址变化
    public pathHashChange() {
        window.addEventListener('hashchange',this.onHashChange)
    }
    public onHashChange(){
        console.log(this.app)
    }


    // 2. 路由映射关系
    public createRouterMap() {

    }
    // 3. 全局组件
    public createComponent() {

    }


}

//  创建初始化方法,vue如果使用use方法注册,那么就必须在class上添加install方法.当use的时候会自动调用install方法
VueRouter.install = function (_Vue: any) {
    Vue = _Vue;

    // 将代码混入,使每个组件中都可以使用 this.$router 
    Vue.mixin({
        beforeCreate: function () {
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router;
                console.log(this.$options)

                // 
                this.$options.router.init();
            }
        }
    });
}

export default VueRouter;
