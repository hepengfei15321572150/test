<template>
    <div id="index">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop, Provide } from "vue-property-decorator";

@Component
export default class Index extends Vue {
    // 数据
    @Prop({ type: Object, required: true }) model!: object;
    // 规则
    @Prop({ type: Object, required: true }) rules!: object;

    // 传递校验项和数据
    @Provide() form = this;

    // 全部局的校验事件,外面点击按钮的时候进行全局校验
    validate(cb) {
        let itemData = this.$children.filter((item: any) => {
            return item.prop;
        });

        let tasks = itemData.map((item:any)=>{
            return item.validate();
        })

        let status = false;
        for( let i=0;i<tasks.length;i++ ){
            if(tasks[i] == false){
                status = false;
                break;
            }else{
                status = true;
            }
        };

        cb(status); 
    }
}
</script>

<style scoped lang="less">
#index {
}
</style>
