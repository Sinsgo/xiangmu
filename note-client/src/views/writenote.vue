<template>
    <div class="write-note">
        <div class="mian-content w1170">
            <div class="title">标题</div>
            <div class="input-wrap">
            <el-input v-model="formData.title"></el-input>
             </div>
        <div class="title">内容</div>
            <quill-editor
            v-model="formData.contentT"
            ref="myQuillEditor"
            :options="editorOption"
            >
            </quill-editor>
            <div class="strong">
               <div class="strong-f">标签：</div> 
               <div class="select">
                   <el-select
                    v-model="formData.category"
                    multiple
                    filterable
                    allow-create
                    default-first-option
                    placeholder="请选择文章标签">
                    <el-option
                    v-for="item in categories"
                    :key="item.value"
                    :label="item.name"
                    :value="item._id">
                    </el-option>
                </el-select>
               </div>
            </div>
            <el-button type="primary" @click="handleSubmit">
                发布笔记
            </el-button>
        </div>
    </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {quillEditor, Quill} from 'vue-quill-editor'
import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'

Quill.register('modules/ImageExtend', ImageExtend)

    export default {
        components:{
            quillEditor
        },
        data(){
            return{
                formData:{
                    title:'',
                    content:'',
                    contentText:'',
                    category:''
                },
                categories:[],
               
        // 富文本框参数设置
        editorOption: {  
          modules: {
            ImageExtend: {
              loading: true,
              name: 'img',
              action: '',
              response: (res) => {
                return res.info
              }
            },
            toolbar: {
              container: container,
              handlers: {
                'image': function () {
                  QuillWatch.emit(this.quill.id)
                }
              }
            }
          }
        }
            }
        },
        methods:{
            handleChange({quill,html,text}){
                this.formData.contentText = text
                this.formData.contentText = this.formData.contentText.substring(0,200) + '...'
            },
            getCategoty(){
                this.$axios.get('/category').then(res=>{
                    console.log(res)
                    this.categories = res.data
                })
            },
            handleSubmit(){
                 console.log(123456)
                 console.log(this.formData)
                this.$axios.post('/article',this.formData).then(res=>{
                   
                    if(res.code == 200){
                        this.$message.success('发布成功')
                        this.$router.push('/index')
                    }else if(res.code == 403){
                        this.$router.push('/index')
                    }
                })
            }
        },
        created(){
            this.getCategoty()
        }
    }
</script>

<style scoped lang="scss">
.mian-content{
margin-top: 30px;
background: #fff;
border-radius: 6px;
padding: 30px;
box-sizing: border-box;

.title{
    line-height: 2;
    font-size: 20px;
    font-weight: 600;
    color: #444;
}
.strong{
    margin: 10px 0;
    display: flex;
    width: 300px;
    height: 50px;
    
    .strong-f{
        display: block;
        margin: 15px 0;
        color: #409eff;
        font-size: 15px;
        font-weight: 600;
    }
    .select{
        padding-top: 5px;
    }
}
}
</style>
<style>
.ql-container{
    min-height: 300px
}
</style>
