<template>
    <div id="layout_index">
        <div class="l_side">
            我是左侧导航
        </div>
        <div class="r_side">
            <div class="title_bar">
                wishing标题
            </div>
            <div class="content_wrap">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component
export default class Index extends Vue {}
</script>

<style scoped lang="less">
#layout_index {
    height: 100%;
    display: flex;
    .r_side {
        width: 100%;
        .title_bar {
            height: 50px;
            background: red;
        }
        .content_wrap{
            height: ~"calc(100% - 50px)";
            background: pink;
            overflow-y:scroll;
        }
    }

    .l_side {
        background: green;
    }
}
</style>
