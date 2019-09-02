<template>
    <div id="app">
        <router-link to="/home">home</router-link> | 
        <router-link to="/home/children1">homeChildren</router-link> | 
        <router-link to="/about">about</router-link>

        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component
export default class Index extends Vue {

    
}
</script>
<style lang="less">
</style>
