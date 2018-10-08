<template>
    <div class="content">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from  '@/components/Header'
    export default {
        components:{
            Header
        },
        data(){
            return{}
        }
    }
</script>

<style scoped>

</style>