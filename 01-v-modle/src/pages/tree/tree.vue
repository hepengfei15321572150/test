<template>
    <div id="tree">
       <item :data="treeData"></item>
    </div>
</template>

<script lang="ts">
import item from './item.vue';
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component({
    name:'tree',
    components:{
        item
    }
})
export default class Tree extends Vue {
    status = false;
    treeData = [
        {
            title: "标题1",
            status:true,
            children: [
                {
                    title: "标题1-1"
                },
                {
                    title: "标题1-2",
                    status:true,
                    children: [
                        {
                            title: "标题1-2-1",
                        },
                        {
                            title: "标题1-2-2"
                        }
                    ]
                }
            ]
        },
        {
            title: "标题2",
            status:true,
            children: [
                {
                    title: "标题2-1"
                },
                {
                    title: "标题2-2"
                },
                {
                    title: "标题2-3",
                    status:false,
                    children: [
                        {
                            title: "标题1-2-1"
                        },
                        {
                            title: "标题1-2-2"
                        }
                    ]
                }
            ]
        }
    ];
}
</script>

<style scoped lang="less">
#tree {
}
</style>
