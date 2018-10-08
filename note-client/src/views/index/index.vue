<template>
    <div >
        <div class="top-box w1170">
              <Banner></Banner>
              <Userbox></Userbox>
        </div>
        <div class="w1170 " >
            <div class="article-wrap ">
                <div class="article-item" v-for="item in content">
                    <div class="article-msg clearfix">
                        <div class="avatar fll">
                            <img :src="item.author.avatar" >
                        </div>
                          <div class="author-msg fll">
                            <div class="row1">
                            <span class="author-name" v-text="item.author.username">莫言</span>
                            <span class="divide">|</span>
                            <span class="article-title" v-text="item.title">貌美如花</span>
                          </div>
                          <div class="row2">
                              <span class="strong" v-text="item.readnumber">浏览：998</span>
                              <span class="strong" v-text="item.commonnum">回复：2</span>
                              <span class="strong" v-text="item.cname">分类：334335</span>
                          </div>
                        </div>
                    </div>
                        <div class="article-content">
                            {{item.content}}
                            <span class="article-many">阅读更多>></span>
                        </div> 
                </div>
         </div>
        </div>
         
    </div>
       
</template>
<script >
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
           content:[],
           category:''
        }
    },
    methods:{
        getData(){
            this.$axios.get('/article').then(res=>{
                this.content = res.data
                console.log(res)
               this.content.forEach(item=>{
              if(item.category){
                 item.cname = item.category.name
              }
               
               })
               
            })
        }
    },
    created(){
        this.getData()
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
    border-bottom:2px solid #f6f6f6;
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


    .article-content{
        position: relative;
        height: 40px;
        overflow: hidden;
    }
    .article-many{
        position: absolute;
        top: 20px;
        right: 5px;
        background-color: #fff;
        padding: 0px 7px;
        border-radius: 3px;
        cursor: pointer;
    }
    

</style>