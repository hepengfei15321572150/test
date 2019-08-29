<template>
    <ul>
        <li class="item" v-for="item in data" :key="item.title">
            <div @click.stop="toggel(item)">
                {{ item.title }}
                <span v-if="item.children && item.children.length">
                    [{{ item.status ? "-" : "+" }}]
                </span>
            </div>

            <item
                v-if="item.children && item.children.length"
                v-show="item.status"
                :data="item.children"
                :key="item.title"
            ></item>
        </li>
    </ul>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component({
    name: "Item"
})
export default class Item extends Vue {
    @Prop() data!: object[];

    toggel(itemData) {
        console.log(itemData);
        itemData.status = !itemData.status;
    }
}
</script>

<style scoped lang="less">
#item {
}
</style>
