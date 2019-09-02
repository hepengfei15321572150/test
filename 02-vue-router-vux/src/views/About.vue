<template>
    <div id="About">
        <h1>This is an about page</h1>

        <div>现在是:{{$store.state.count}}个</div>
        <div>剩余:{{$store.getters.leftCount}}个</div>

        <button @click="add">增加</button>

        
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component
export default class About extends Vue {
    add(){
        // this.$store.commit('addCount');
        this.$store.dispatch('addCount');
    }
}
</script>

<style scoped lang="less">
#About {}
</style>
