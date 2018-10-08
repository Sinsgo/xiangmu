<template>
    <div class="login-header">
         <div class="login-title">新用户注册</div>
        <div class="login-h">
            <el-form class="form" ref="form"  :model="formData">
            <el-form-item prop="username">
                <el-input  placeholder="请输入用户名" v-model="formData.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="formData.password"></el-input>
            </el-form-item>
            <el-form-item prop="email">
                <el-input type="email" placeholder="请输入邮箱" @keyup.enter.native="subMit" v-model="formData.email"></el-input>
            </el-form-item>
            </el-form>
                <el-button type="primary" class="login-btn" @click="subMit" :loading="isLoading">注册</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                formData:{
                    username:'xiao',
                    password:'1234567',
                    email:'1589467144@qq.com'
                },
                 isLoading:false
            }
           
        },
        methods:{
             subMit(){ 
                this.isLoading = true
                this.$axios.post('/user',this.formData).then(res => {
                    console.log(res)
                    if(res.code == 200){
                        this.$message.success(res.msg)
                        setTimeout(()=>{ this.$router.push('/index')},500)
                    }else{
                        this.$message.error(res.msg)
                    }
                    this.isLoading=false
                   })
            }
           
        }
    }
</script>

<style scoped>
.login-header{
    overflow: hidden;
    box-sizing: border-box;
    background: #fff;
    border-radius: 5px;
    width: 500px;
    margin: 80px auto 0;
}
.login-h{
    width: 350px;
    height: 300px;
    padding: 20px;
    margin: 10px auto 0;
    background: #fff;
}
.login-btn{
    width: 300px;
    box-sizing: border-box;
    margin-left: 25px ;
}
.login-title{
    margin-top: 20px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #333;
    font-size: 24px;
    font-weight: 400;
}

</style>