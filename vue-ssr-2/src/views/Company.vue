<template>
    <div class="company">company页面</div>
</template>

<script>
export default {
    metaInfo: {
       title:'company页面title3333',
       meta:[{
           name: 'keywords',
           content: 'company关键字4444'
       }]
   } ,
    name: 'Company',
    created() {
        console.log('我是company页面');
    }
}
</script>

<style lang="less" scoped>
.company {
    width: 100%;
    min-height: 400px;
    background-color: chartreuse;
}
</style>
