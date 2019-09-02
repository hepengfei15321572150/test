/**

    监听器:负责更新页面中的值和具体的绑定,一个表达式就会有一个watcher
 */

class Watcher {
    // vue的实例,所关联的数据key
    constructor(vm, key, cb) {

        this.$vm = vm;
        this.$key = key;
        this.$cb = cb;

        Dep.target = this;
        this.$vm.$data[this.$key];// 强制执行一下监听器里面的get函数
        // console.log('watcher被创建了')
        // Dep.target = null;
    }

    update() {
        // console.log(`dom    更新了`)
        this.$cb.call(this.$vm, this.$vm[this.$key]);
    }

    get(){
        Dep.target = this;  // 缓存自己
        var value = this.$vm.$data[this.$key]  // 强制执行监听器里的get函数
        // Dep.target = null;  // 释放自己
        return value;
    }
}