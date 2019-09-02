/*
    负责模板的编译:html结构的编译
*/
class Compile {
    // _el:初始化传递的元素, 
    // _vm:vm实例
    constructor(_el, _vm) {
        this.$vm = _vm;
        this.$el = document.querySelector(_el);

        // 将真实的Dom转换为虚拟dom碎片,方便以后做替换
        this.$fragment = this.transformFragment(this.$el);

        // 解析dom碎片开始替换
        this.complieElement(this.$fragment);

        // 将dom碎片插入指定元素内
        this.$el.appendChild(this.$fragment);
    }

    // 将真实的Dom转换为虚拟dom碎片,方便以后做替换
    transformFragment(el) {
        let fragment = document.createDocumentFragment();
        // 找到第一个元素
        let children = el.firstChild;

        while (children) {
            fragment.appendChild(children);
            children = el.firstChild;
        };

        return fragment;
    }

    // 解析dom碎片开始替换
    complieElement(frementNode) {
        // 找到所有的node节点,包括换行,空格,标签,文本等
        let childNodes = frementNode.childNodes;
        Array.from(childNodes).forEach((nodeItem) => {
            // 节点类型
            let nodeType = nodeItem.nodeType;
            // 节点内容
            let textContent = nodeItem.textContent;

            // 是否为{{}}语法
            let exp = /\{\{(.*)\}\}/;
            switch (nodeType) {
                case 1:
                    // 元素节点

                    break;
                case 3:
                    // 文本节点
                    console.log(22)
                    if (exp.test(textContent)) {
                        // 更新模板 {{}}
                        this.compileText(nodeItem, RegExp.$1);
                    }
                    break;
            };
        });
    }

    // 更新模板{{}}
    compileText(node, value) {
        console.log(value)
    }

}