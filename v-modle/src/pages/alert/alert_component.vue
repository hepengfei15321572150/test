<template>
    <div id="alert_component">
        <h3>{{title}}</h3>
        <div>{{message}}</div>
        <div>
            <a href="javascript:;">关闭</a>
            <a href="javascript:;">取消</a>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component
export default class AlertComponent extends Vue {
    @Prop({ type: String, default: "" }) title!: string;
    @Prop({ type: String, default: "" }) message!: string;
}
</script>

<style scoped lang="less">
#alert_component {
    width: 300px;
    height: 200px;
    background-color: red;
    position: fixed;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 2;
}
</style>
