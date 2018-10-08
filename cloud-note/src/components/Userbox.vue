<template>
    <div class="right-box">
        <div class="login-box">
            <div class="item">
                <el-input type="text" placeholder="邮箱" v-model="formData.username"></el-input>
            </div>
            <div class="item">
                <el-input type="password" placeholder="密码" v-model="formData.password"></el-input>
            </div>
            <div class="item">
                <el-button type="primary" class="_el-btn" @click="handelLogin">登录</el-button>
            </div>
            <div class="item">
                <el-button  class="_el-btn" @click="$router.push('/region')">注册</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                formData:{
                    username:'1589467144@qq.com',
                    password:'1234534'
                }
                
            }
        },
        methods:{
            handelLogin(){
                
            }
        }
    }
</script>

<style scoped>
.right-box{
    box-sizing: border-box;
    width: 360px;
    background: #fff;
    border-radius: 5px;
    padding: 21px 30px;
}

.item{
    margin-top: 30px;
}
._el-btn{
    width: 100%;
}
</style>