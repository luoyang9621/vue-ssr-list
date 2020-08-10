<template>
    <div class="company">
        <h2>company页面</h2>
        <ul v-if="list">
            <li v-for="(item, index) in list" :key="index">{{ JSON.stringify(item) }}</li>
        </ul>
    </div>
</template>

<script>
import { getList1 } from './../axios/list';

export default {
    head: {
        title: 'company标题',
        meta: [
            { name: 'keyword', content: 'company页面关键字' },
            { name: 'description', content: '这个是company页面的具体描述' }
        ]
    },
    async asyncData() {
        const res = await getList1();
        return { list: res } ;
    },
    computed: {

    },
    name: 'Company',
    created() {
        console.log('我是company页面111', this.list);
    }
}
</script>

<style lang="less" scoped>
.company {
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    h2 {
        text-align: center;
        margin-bottom: 40px;
    }
    ul {
        li {
            text-align: center;
        }
    }
}
</style>
