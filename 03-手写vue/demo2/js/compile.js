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
                    this.compileElement(nodeItem);
                    break;
                case 3:
                    // 文本节点
                    if (exp.test(textContent)) {
                        // 更新模板 {{}}
                        this.compileText(nodeItem, RegExp.$1);
                    }
                    break;
            };

            // 递归操作所有的子节点
            if (nodeItem.childNodes && nodeItem.childNodes.length) {
                this.complieElement(nodeItem);
            }
        });
    }

    // 更新模板{{}}节点
    compileText(node, oldVal) {
        // 统一的更新函数
        this.update(node, oldVal, 'text');
    }
    // 更新元素节点
    compileElement(node) {
        let nodeAttrs = node.attributes;
        Array.from(nodeAttrs).forEach((itemAttr) => {
            let attrName = itemAttr.name;
            let attrValue = itemAttr.value;
            // 指令是否已k-开头的
            if (attrName.startsWith('k-')) {
                // 统一的更新函数
                this.update(node, attrValue, attrName.substring(2));
            } else if (attrName.startsWith('@')) {
                // 指令是否已k-开头的
                // 统一的更新函数
                this.update(node, attrValue, attrName.substring(1), 'event');
            }
        });

    }

    // 统一的更新函数
    update(node, oldVal, name, resource = 'data') {
        // 找到要执行的函数
        let fnName = this[name + '_update'];

        // 获取目标的函数或者数据
        let targetValue = this.getTargetData(resource, oldVal);

        fnName && fnName.call(this, node, targetValue);
        // 删除元素上的属性名
        this.removeNodeAttribute(node);

        // 添加更新
        new Watcher(this.$vm, oldVal, () => {
            // 获取目标的函数或者数据
            let targetValue = this.getTargetData(resource, oldVal);
            fnName.call(this, node, targetValue);
        });
    };

    // 获取目标的函数或者数据
    getTargetData(resource, oldVal) {
        let target = '';
        switch (resource) {
            case 'data':
                target = this.$vm.$data[oldVal];
                break;
            case 'event':
                target = this.$vm.$methods[oldVal];
                break;
        }

        return target;
    }

    // 删除元素上的属性名
    removeNodeAttribute(node) {
        let nodeAttrs = node.attributes;
        // Array.from(nodeAttrs).forEach((itemAttr) => {
        //     let attrName = itemAttr.name;

        //     if (attrName.startsWith('k-') || attrName.startsWith('@')) {
        //         // 指令是否已k-开头的
        //         node.removeAttribute(attrName);
        //     };
        // });
    }

    // 更新模板语法的函数v-text || {{}}
    text_update(node, value) {
        node.textContent = value;
    }

    // 更新模板语法的函数 v-html
    html_update(node, value) {
        node.innerHTML = value;
    }

    // 显示隐藏 v-if
    if_update(node, value) {
        // let nodeCopy = node;
        // let el = document.createComment(value);
        // el.id = value;
        // console.log(222, value, document.getElementById(value))
        // if (value) {
        //     // nodeCopy.parentNode.appendChild(nodeCopy);
        // } else {
        //     // nodeCopy.parentNode.removeChild(nodeCopy);
        //     // nodeCopy.parentNode.appendChild(el);
        // }

        // this.$el.appendChild(el)
    }

    click_update(node, value) {
        console.log(123, node, value)
        node.addEventListener('click', value.bind(this.$vm), false);
    }
}