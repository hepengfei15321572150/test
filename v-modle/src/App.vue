<template>
    <div id="app">
        <!-- <router-view /> -->
        <!-- <Input v-model="value" placeholder="请输入内容"></Input>
        {{ value }} -->

        <form-test :model="data" :rules="rules" ref="formTest">
            <form-item prop="username" label="用户名">
                <form-input
                    v-model="data.username"
                    placeholder="请输入用户名"
                ></form-input>
            </form-item>
            <form-item prop="password" label="密码">
                <form-input
                    v-model="data.password"
                    placeholder="请输入密码"
                ></form-input>
            </form-item>
            <form-item>
                <button type="button" @click="submitTest">提交</button>
            </form-item>
        </form-test>

        {{ data }}
    </div>
</template>
<script lang="ts">
import Input from "./pages/v-model/index.vue";
import FormTest from "./pages/form/form.vue";
import FormItem from "./pages/form/form-item.vue";
import FormInput from "./pages/form/input.vue";
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component({
    components: {
        Input,

        FormTest,
        FormItem,
        FormInput
    }
})
export default class Index extends Vue {
    public value = "22";

    // 用户名 密码
    public data = {
        username: "用户名",
        password: "666"
    };

    // 验证规则
    public rules = {
        username: { require: true, message: "用户名不能为空" },
        password: { require: true, message: "密码不能为空" }
    };

    submitTest() {
        this.$refs["formTest"].validate((status: boolean) => {
            console.log(status);
            if (status) {
                alert("可以登录了");
            } else {
                alert("你错了");
            }
        });
    }
}
</script>
<style lang="less">
</style>
