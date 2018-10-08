<template>
    <div class="right-box">
        <div class="login-box" v-if="!userInfo.username">
            <div class="item">
                <el-input type="text" placeholder="邮箱" v-model="formData.email"></el-input>
            </div>
            <div class="item">
                <el-input type="password" placeholder="密码" v-model="formData.password"></el-input>
            </div>
            <div class="item">
                <el-button type="primary" class="_el-btn" @click="handelLogin" @keyup.enter="handelLogin">登录</el-button>
            </div>
            <div class="item">
                <el-button  class="_el-btn" @click="$router.push('/region')">注册</el-button>
            </div>
        </div>
        <div class="user-msg-box" v-else>
            <div class="img-wrap">
                <img :src="userInfo.avatar" >
            </div>
            <div class="username">
                {{userInfo.username}}
             </div>
            <div class="user-email">
                {{userInfo.email}}
            </div>
            <div class="logout-wrap">
                <el-button type="warning" @click="handelLogout">
                    退出登录
                </el-button>
            </div>
        </div>
        
    </div>
</template>

<script>

import {mapState} from 'vuex'
    export default {
        data(){
            return{
                formData:{
                    email:'1589467144@qq.com',
                    password:'1234567'
                }
                
            }
        },
        methods:{
            handelLogin(){
                this.$axios.post('/login',this.formData).then(res=>{
                    if(res.code == 200){
                        this.$message.success(res.msg)
                        this.$store.commit('CHANGE_userInfo',res.userData)
                    }
                    
                })
            },
            handelLogout(){
                this.$axios.get('/logout').then(res=>{
                    let userInfo = {
                            avatar:'',
                            email:'',
                            username:''
                        }
                    if(res.code == 200){
                        this.$message.success(res.msg)
                        this.$store.commit('CHANGE_userInfo',userInfo)//清空vuex当中保留的用户信息
                        this.$router.push('/index')
                    }else{//未登录状态
                        this.$store.commit('CHANGE_userInfo',userInfo)//清空vuex当中保留的用户信息
                         this.$message.info('登录已过期，自动退出')
                    }
                })
            }
        },
        computed:{ 
            ...mapState(['userInfo'])
        }
    }
</script>

<style scoped lang="scss">
.right-box{
    box-sizing: border-box;
    width: 360px;
    background: #fff;
    border-radius: 5px;
    padding: 21px 30px;

    .item{
    margin-top: 30px;
}
._el-btn{
    width: 100%;
}
 
.user-msg-box{  
 .img-wrap{
    width: 150ps;
    height: 150px;
    margin: 0 auto 10px;
    img{
        margin: 0 auto;
        display: block;
        width: 50%;
        height:100%;
    }
 }
 .username{
     margin: 10px 0;
     text-align: center;
     font-size:15px;
     font-weight: 700;
     color: #444;
 }
 .user-email{ 
     text-align: center;
     font-size:15px;
     font-weight: 400;
     color: #444;
 }
 .logout-wrap{
     padding: 20px 0 0 0;
     /deep/{
         .el-button{
             width: 100%;
             display: block;
         }
     }
 }
}

}
</style>