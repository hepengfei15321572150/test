<template>
    <div id="index">
        我是home/index
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component
export default class Index extends Vue {

}
</script>

<style scoped lang="less">
#index {}
</style>
