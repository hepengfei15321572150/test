
/*
    负责指令的解析
*/
class Compile {
    $fragment = null;
    /*
        el:vue中的挂在元素
        vm:vue实例
    */
    constructor(el, vm) {
        this.$vm = vm;

        // 挂在的元素
        this.$el = document.querySelector(el);

        // 把模板变为文档碎片,然后进行模板的替换操作
        const fragment = this.node2Fragment(this.$el);
        this.$fragment = fragment;

        // 执行编译,将dom中的输出语法({{}}) 和指令解析并且替换
        this.compile(fragment);

        this.$el.append(this.$fragment);
    }

    // 将el元素下面的所有节点变为文档碎片
    node2Fragment(el) {
        const fragment = document.createDocumentFragment();

        while (el.firstChild) {
            fragment.appendChild(el.firstChild);
        }
        return fragment;
    }

    // 执行编译,将dom中的输出语法({{}}) 和指令解析并且替换
    compile(el) {
        let childNodes = el.childNodes;

        Array.from(childNodes).forEach((itemNode) => {
            let nodeType = itemNode.nodeType;
            if (nodeType == 1) {
                // 元素节点
            } else if (nodeType == 3) {
                // 文本节点

                // 判断文本节点中是否含含有 双大括号语法,有点话就替换  {0,}([a-z|A-Z|0-9]) {0,}
                let isInter = /\{\{(.*)\}\}/.test(itemNode.textContent)
                // console.log(isInter, itemNode,itemNode.textContent)
                if (isInter) {
                    // 开始替换
                    this.compileText(itemNode);
                }
            }

            // 递归子节点
            if (itemNode.childNodes && itemNode.childNodes.length > 0) {
                this.compile(itemNode);
            }
        });
    }

    // 将内容替换
    compileText(node) {
        // 找到正则匹配出的key值
        const exp = RegExp.$1.trim();
        this.update(node, exp, 'text')
    }

    // 通用更新数据方法
    update(node, exp, fnName) {
        // 取出vm.$data中匹配的数据
        // let text = this.$vm.$data[exp];
        // node.textContent = text;

        // new Watcher(this.$vm, exp, (value) => {
        //     node.textContent = text;
        // });
        let updateor = this[fnName + '_update'];

        updateor && updateor(node, this.$vm.$data[exp]);

        // 创建响应式
        new Watcher(this.$vm, this.$vm.$data[exp], () => {
            updateor && updateor(node, this.$vm.$data[exp]);
        });
    }

    // 更新 {{}} 的结构
    text_update(node, value) {
        console.log(node, value)
        node.textContent = value;
    }
}