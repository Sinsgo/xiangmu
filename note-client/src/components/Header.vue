<template>
    <header class="layout-header">
        <div class="w1170 wrap">
            <div  class="title"><router-link to="/">云笔记</router-link></div>
            <el-button class="write-btn" @click="handlewritenote">
             写笔记
            </el-button>
        </div>
    </header>
</template>

<script>
    export default {
        name:'Header',
        data(){
            return{
                
            }
        },
        methods:{
            handlewritenote(){
                if(this.$store.state.userInfo.username){
                    this.$router.push('/writenote')
                }else{
                    this.$message.info('登录后才能写笔记哦！')
                }
            }
        }
    }
</script>

<style scoped>
.layout-header{
    height: 50px;
    background-color: #409eff;
}
 .wrap{
        display: flex;
        justify-content: space-between;
    }
.title a{
   line-height: 1.6;
    color: #fff;
    font-weight: 400;
    font-size: 30px;
    text-decoration: none;
}
.write-btn{
    margin-top: 3px;
}
</style>