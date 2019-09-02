/*
    管理员:管理watcher,一个输出变量就是一个watcher
    和data中的属性是1:1的关系

    Dep负责存储 watcher 和 通知数据的变更,data中的一个key就会有一个dep
*/

class Dep {
    constructor() {
        // 存放所有的watcher
        this.watchers = [];
    }

    // 添加watcher
    addWatchs(watcher) {
        // console.log(111, this.watchers)
        this.watchers.push(watcher);
        // console.log(this.watchers)
    }

    // 通知变更
    notify(){
        // 遍历watchers,通知每一个watch去更新,每一个watch上必须有一个update方法
        this.watchers.forEach((watch)=>{
            watch.update();
        });
    }
}