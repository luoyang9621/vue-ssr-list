<template>
    <div class="test2">这个是test222222222页面</div>
</template>
<script>
export default {
     metaInfo: {
       title:'test2页面title',
       meta:[{
           name: 'keywords',
           content: 'test2关键字'
       }]
   } ,
    name: 'Test2',
    created() {
        console.log('我是test2页面');
    }
}
</script>

<style lang="less" scoped>
.test2 {
    width: 100%;
    min-height: 300px;
    background-color: blueviolet;
}
</style>