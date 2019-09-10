<template>
    <div id="login">
        <div>
            <input type="text" placeholder="用户名" v-model="username" />
        </div>
        <div>
            <input type="text" placeholder="密码" v-model="password" />
            {{ $store.state.login }}
        </div>
        <div>
            <button @click="login">提交</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component
export default class Login extends Vue {
    public username: string = "admin";
    public password: string = "";

    async login(): Promise<any> {
        let status = await this.$store.dispatch("login/login", { username: this.username });
        if( status ){
            this.$router.push('/home/index');
        }
    }
}
</script>

<style scoped lang="less">
#login {
}
</style>
