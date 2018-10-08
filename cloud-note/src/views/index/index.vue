<template>
    <div>
        <div class="top-box w1170">
              <Banner></Banner>
              <Userbox></Userbox>
        </div>
        <div class="w1170">
            <div class="article-wrap ">
                <router-link to="#" class="article-item">
                    <div class="article-msg clearfix">
                        <div class="avatar fll">
                            <img src="http://pbl.yaojunrong.com/avatar1.jpg" >
                        </div>
                          <div class="author-msg fll">
                            <div class="row1">
                            <span class="author-name">莫言</span>
                            <span class="divide">|</span>
                            <span class="article-title">貌美如花</span>
                          </div>
                          <div class="row2">
                              <span class="strong">浏览：998</span>
                              <span class="strong">回复：2</span>
                              <span class="strong">分类：334335</span>
                          </div>
                        </div>
                    </div>  
                    <div class="article-content">
                            江湖读后感一皇帝欧冠hi回话个回顾 
                    </div>
                </router-link>
         </div>
        </div>
         
    </div>
       
</template>

<script>
import Banner from '@/components/Banner'
import Userbox from '@/components/Userbox'
    export default {
        name:'index',
    components:{
        Banner,
        Userbox
    },
    data(){
        return{
           
        }
    }
    }
</script>

<style scoped >
.top-box{
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.article-wrap{
    margin-top: 30px;
    width: 750px;
    background: #fff;
    overflow: hidden;
    border-radius: 6px;
}
.article-item{
    display: block;
    color: #333;
    text-decoration: none;
    background: #fff;
    padding: 24px;
}
.avatar{
    width: 80px;
    height: 80px;
}
img{
    display:block;
    width: 100%;
    height: 100%;
    }
.author-msg{
        margin-left: 15px;
    }
    .row1{
        line-height: 24px;
    }
    .author-name{
        font-size: 18px;
        font-weight: 700;
        color: #409eff;
    }
    .article-title{
        font-weight: 700;
    }
    .row2{
        margin-top: 5px;
        width: 500px;
        padding: 6px;
        border-radius: 4px;
        background: #bbb;
        color: #555;
    }
</style>