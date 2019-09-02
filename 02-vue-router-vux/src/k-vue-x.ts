let Vue: any = null;

class Store {
    private state: object = {};
    private getters: any = {};
    private mutations: any = {};
    private actions: any = {};

    constructor(options: any) {

        // state 需要是响应式的,因为组件中用到的数据是响应式的
        this.state = new Vue({
            data: options.state || {}
        });

        // { mutations:{ addCount(){} } }
        this.mutations = options.mutations || {};

        // { actions:{ addCount({state,commit,getters}){} } }
        this.actions = options.actions || {};


        this.handelGetters(options.getters || {});
    }

    // 调动mutations
    public commit(funName: string, args: string[]) {
        this.mutations[funName](this.state, args);
    }

    // 调用actions
    public dispatch(funName: string, args: string[]) {
        this.actions[funName]({
            state: this.state,
            commit: this.commit.bind(this),
        }, args);
    }

    //  设置getters为不可修改
    public handelGetters(getters: any) {
        const _this: any = this;
        this.getters = {};
        Object.keys(getters).forEach((itemKey: any) => {
            Object.defineProperty(this.getters, itemKey, {
                get() {
                    return getters[itemKey](_this.state)
                }
            });
        });
    }
}

function install(_Vue: any) {
    Vue = _Vue;

    Vue.mixin({
        beforeCreate() {
            if (this.$options.store) {
                Vue.prototype.$store = this.$options.store;
            }
        }
    });

}

export default {
    Store,
    install,
}
