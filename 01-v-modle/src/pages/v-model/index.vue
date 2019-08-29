<template>
    <div id="index">
        <input type="text" :value="value" @input="onInput" v-bind="$attrs" />
    </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component
export default class Index extends Vue {
    @Prop({ default: "", type: String }) value!: string;

    // inheritAttrs = false;

    onInput(e) {
        this.$emit("input", e.target.value);
    }
}
</script>

<!-- 
<script>
export default {
    inheritAttrs:false,
    props: {
        value:{
            default:'',
            type:String,
        }
    },
    
    methods:{
        onInput(e) {
            this.$emit("input", e.target.value);
        }
    }
}
</script>
-->
<style scoped lang="less">
#index {
}
</style>
