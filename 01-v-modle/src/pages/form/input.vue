<template>
    <div id="input">
        <input :type="type" :value="value" @input="onInput" />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component
export default class Input extends Vue {
    // 输入值
    @Prop({ type: String, default: "" }) value!: string;
    @Prop({ type: String, default: "text" }) type!: string;

    onInput(e) {
        this.$emit("input", e.target.value);

        // 通知父节点 触发validate事件
        this.$parent.$emit('validate');
    }
}
</script>

<style scoped lang="less">
#input {
}
</style>
