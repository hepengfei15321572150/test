<template>
    <div id="form_item">
        <div>{{ label }} :</div>
        <div>
            <slot></slot>
        </div>
        <p style="color:red;">{{ errorMessage }}</p>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop, Inject } from "vue-property-decorator";

@Component
export default class FormItem extends Vue {
    @Prop({ default: "", type: String }) label!: string;
    @Prop({ default: "", type: String }) prop!: string;

    @Inject() ["form"];

    // 错误信息
    public errorMessage: string = "";

    mounted() {
        this.$on("validate", () => {
            this.validate();
        });
    }

    validate() {
        const tasks = this.form.rules[this.prop];
        const value = this.form.model[this.prop];

        if(value == "") {
            this.errorMessage = tasks.message;
            return false;
        } else {
            this.errorMessage = "";
            return true;
        }
    }
}
</script>

<style scoped lang="less">
#form_item {
    display: flex;
}
</style>
