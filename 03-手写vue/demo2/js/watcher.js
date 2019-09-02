/*
    订阅者:初始化的时候需要将自己添加在 消息订阅器中(dep),当消息变化时来执行对应
        的订阅者(watcher)
*/
class Watcher {
    constructor(vm, exp, cb) {
        this.$vm = vm;
        this.$exp = exp;
        this.$cb = cb;

        // 此处为了使Dep有目标值
        Dep.target = this;
        this.$vm.$data[this.$exp];//强制调用一下对应数据的get方法,
        Dep.target = null;// 清空目标值
    }

    // 此处在dep.notify方法中会被执行,
    // 也就是说,在数据变化的时候,会通知对应watcher的update方法
    update() {
        // d调用回调函数,并且将目标值传递出去
        this.$cb && this.$cb.call(this, this.$vm.$data[this.$exp]);
    }
}