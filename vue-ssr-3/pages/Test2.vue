<template>
    <div class="test2">这个是test222222222页面</div>
</template>
<script>
export default {
    head: {
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1, userable=yes'},
            { name: 'keyword', content: 'test2页面关键字' },
            { name: 'description', content: 'test2页面描述，描述一下' },
        ]
    },
    name: 'Test2',
    created() {
        console.log('我是test2页面');
    }
}
</script>

<style lang="less" scoped>
.test2 {
    width: 100%;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>