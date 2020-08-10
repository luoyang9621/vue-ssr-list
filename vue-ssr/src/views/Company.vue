<template>
    <div class="company">
        company页面
        <p>列表</p>
        <div class="list">
            <ul v-if="list">
                <li v-for="(item, index) in list" :key="index">
                    {{ JSON.stringify(item) }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Company',
    computed: {
        list() {
            return this.$store.state.list1;
        }
    },
    asyncData({ store }) {
        console.log('store company', Date.now());
        return store.dispatch('getList1');
    },
    created() {
        console.log('我是company页面', this.list);
    },
    beforeMount() {
        console.log('beforeMount');
        this.getMyList();
    },
    methods: {
        getMyList() {
            this.$store.dispatch('getList1');
        }
    }
}
</script>

<style lang="less" scoped>
.company {
    width: 100%;
    min-height: 400px;
}
</style>
