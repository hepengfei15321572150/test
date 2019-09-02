/*
    对数据进行递归操作,添加get和set方法,增加监听
*/
class Observer {
    constructor(data) {
        console.log(data)

        this.walk(data);
    }

    // 
    walk(_data) {

        // 数据不存在 || 数据类型不是object 就返回
        if (!_data || typeof _data !== 'object') {
            return;
        };

        // 对数据进行循环 增加get和set方法
        Object.keys(_data).forEach((itemData) => {
            // 调用 Object.defineProperty()
            this.defineActive(_data, itemData, _data[itemData]);
        });
    }

    // 调用 Object.defineProperty()
    defineActive(obj, key, value) {

        // 递归处理子数据
        this.walk(value);

        let dep = new Dep();

        Object.defineProperty(obj, key, {
            get() {
                console.log(`${key} 数据被获取了`)

                // 对数据进行收集
                Dep.target && dep.addWatcher(Dep.target);
                return value;
            },
            set(newVal) {
                if (newVal == value) {
                    return;
                }
                console.log(`${key}数据被更新了,新值为=>${newVal}`)
                value = newVal;

                // 数据跟新的时候,通知watcher
                dep.notify();
            }
        });
    }
}