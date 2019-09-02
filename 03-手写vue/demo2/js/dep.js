/*
    消息订阅器:负责处理属性变化时 通知 对应的订阅者更新函数
*/
class Dep {
    constructor() {
        this.watchers = [];
    }

    addWatchers(watchers) {
        this.watchers.push(watchers);
    }

    notify(){
        this.watchers.forEach((item)=>{
            item.update();
        });
    }
}