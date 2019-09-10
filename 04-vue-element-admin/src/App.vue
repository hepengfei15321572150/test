<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component
export default class Index extends Vue {}
</script>
<style lang="less">
#app{
    height: 100%;
}
</style>
