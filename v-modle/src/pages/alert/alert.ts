import Vue from 'vue';

function Alert(Component: any, options: object = {}) {
    let { delay }: any = options;

    const vm: any = new Vue({
        // 此处要传递 props,就会将props数据传递给该组件
        render: (h: any) => h(Component, { props:options }),
    }).$mount();

    document.body.appendChild(vm.$el);

    // 隐藏方法
    vm.$el.hide = function () {
        document.body.removeChild(vm.$el);
        vm.$destroy();
    };

    if (delay != 0) {
        setTimeout(() => {
            vm.$el.hide();
        }, delay || 3000);
    };
    
    return vm.$el;
}

export default Alert;