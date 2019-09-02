/*
    实现数据的改写,修改数据的set个get方法,响应式数据绑定的基础


    实现vue需要以下几个模块
        1. 改写数据get和set方法
        2. 管理员:收集监听数据变化的函数(watcher) 和 通知数据的变更
        3. watcher:数据更新后负责页面的dom更新
        4. 编译器:complie: 负责页面中指令的解析

*/
class Kvue {
    constructor(options) {

        // 保存参数
        this._options = options;

        // 取出传递的数据
        this.$data = this._options.data;

        // 进行递归操作,让_options.data中的key全部改写get和set方法
        this.observer(this.$data);

        // new Watcher(this,'text');
        // this.text;

        new Compile(options.el, this);
    }

    // 进行递归操作,让_options.data中的key全部改写get和set方法
    observer(data) {
        // 如果值不存在 || 类型不是object 就返回
        if (!data || typeof data != 'object') {
            return;
        }
        Object.keys(data).forEach((key) => {
            // 修改ger方法和set方法
            this.obactive(data, key, data[key]);
        });
    }
    // 修改ger方法和set方法
    obactive(obj, key, value) {
        // 进行递归操作
        this.observer(value);

        // 在读取的时候创建dep,在读取的时候 收集dep,set的时候通知dep去更新dom
        const dep = new Dep();

        Object.defineProperty(obj, key, {
            get() {
                // 收集dep
                Dep.target && dep.addWatchs(Dep.target);

                // dep.addWatchs(Dep.target)
                return value;
            },
            set(newVal) {
                if (newVal === value) {
                    return;
                };
                value = newVal;
                // console.log(`${key}属性更新了,值为${newVal}`)
                dep.notify();
            }
        });
    }
}

