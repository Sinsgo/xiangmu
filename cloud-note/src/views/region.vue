<template>
    <div class="login-header">
         <div class="login-title">新用户注册</div>
        <div class="login-h">
            <el-form class="form" ref="form" :rules="rule" :model="formData">
            <el-form-item prop="username">
                <el-input  placeholder="请输入用户名" v-model="formData.username"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
                <el-input type="password" placeholder="请输入密码" v-model="formData.pass"></el-input>
            </el-form-item>
            <el-form-item  prop="checkPass">
                <el-input type="password" placeholder="请确认密码" v-model="formData.checkPass"></el-input>
            </el-form-item>
            <el-form-item prop="email">
                <el-input type="email" placeholder="请输入邮箱" v-model="formData.email"></el-input>
            </el-form-item>
            </el-form>
                <el-button type="primary" class="login-btn" @click="subMit" :loading="isLoading">提交</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            const validateUsername = (rule,value,callback) => {
                if(!value){
                    callback(new Error('请输入用户名'))
                }else{
                    callback()
                }
            }
            const validatepass = (rule,value,callback) => {
                if(value&&value.length>=6){
                    callback()
                }else{
                    callback(new Error('请输入合法的密码'))
                }
            }
            const validatecheckPass = (rule,value,callback) => {
                if(!value){
                    callback(new Error('请再次输入密码'));
                }else{
                    if(value !== this.formData.pass){
                    callback(new Error('两次输入的密码不一致'));
                }else{
                    callback()
                }
                }
            }
            const email = (rule,value,callback) => {
                if(!value){
                    callback(new Error('请输入邮箱'))
                }else{
                    callback()
                }
            }
            return{
                formData:{
                    username:'',
                    password:'',
                    email:''
                },
                rule:{
                    username:[{validator:validateUsername,trigger:'blur'}],
                    pass:[{validator:validatepass,trigger:'blur'}],
                    checkPass:[{validator:validatecheckPass,trigger:'blur'}],
                    email:[{validator:email,trigger:'blur'}],
                },
                isLoading:false
            }
        },
        methods:{
            handleClick(){
                this.isLoading=true
                this.$router.push('/',this.formData).then(res => {
                    console.log(res)
                    if(res.code == 200){
                        this.$store.commit('CHANGE_USERINFO',res.data)
                        this.$message.success('登录成功')
                        setTimeout(()=>{ this.$router.push('/')},500)
                    }else{
                        this.$message.erro(res.msg)
                    }
                    this.isLoading=false
                }).catch(err =>{
                    this.isLoading =false
                })
            },
            subMit(){ 
               this.$refs['form'].validate((valid)=>{
                   if(valid){
                       this.handleClick()
                   }else{
                       return false;
                   }
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
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #333;
    font-size: 24px;
    font-weight: 400;
}

</style>