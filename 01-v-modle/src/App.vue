<template>
    <div id="app">
        <!-- <router-view /> -->
        <!-- <Input v-model="value" placeholder="请输入内容"></Input>
        {{ value }} -->

        
        <!-- <formIndex></formIndex> -->
        <tree></tree>
    </div>
</template>
<script lang="ts">
import formIndex from './pages/form/index.vue';
import tree from './pages/tree/tree.vue';
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component({
    components: {
        formIndex,
        tree
    }
})
export default class Index extends Vue {
    public value = "22";

    
}
</script>
<style lang="less">
</style>
