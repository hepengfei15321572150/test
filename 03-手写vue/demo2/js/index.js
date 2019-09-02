/*
    对数据劫持,指令解析,watcher跟新进行整合

    在模板中每一个输出项代表一个watcher,
    在数据中,数据的每一项代表一个dep,
    当数据更新的时候,set方法会通知对应的dep,dep会通知对应的watch,应为一个watcher对应一个输出项,
    所以当watcher呗调用的时候模板就更新了
*/
class SelfVue {
    constructor(_options) {
        this.$options = _options;
        this.$data = _options.data;

        // 对数据进行改造,添加get和set方法
        new Observer(this.$data);

        // 解析指令
        new Compile(_options.el, this);
    }
}