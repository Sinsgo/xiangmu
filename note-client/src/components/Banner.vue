<template>
    <div class="banner-weap">
        <img src="/static/img/banner.jpg">
        <div class="desc">
            十三亿人都会用的云笔记
        </div>
    </div>
</template>

<script>
    export default {
        name:'banner'
    }
</script>

<style scoped>
.banner-weap{
    position: relative;
    width: 750px;
    border-radius: 5px;
    overflow: hidden;
}
img{
    display:block;
    width: 100%;
}
.desc{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 20px;
    font-weight: 400;
    padding-left: 30px;
    line-height: 50px;
    color: rgba(255, 255,255,.8);
    background: rgba(0, 0, 0,.5)
}
</style>