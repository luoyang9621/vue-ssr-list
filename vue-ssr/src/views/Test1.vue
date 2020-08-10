<template>
    <div class="test-1">
        <p>这个是test1页面0000</p>
        <div class="flex">
            <div class="flex-1">flex-1</div>
            <div class="flex-2">flex-2</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Test1',
    created() {
        console.log('我是test1页面');
    }
}
</script>

<style lang="less" scoped>
.test-1 {
    width: 100%;
    min-height: 300px;
    .flex {
        height: 200px;
        display: flex;
        .flex-1 {
            height: 100px;
        }
        .flex-2 {
            color: #000;
            font-size: 18px;
        }
    }
}
</style>