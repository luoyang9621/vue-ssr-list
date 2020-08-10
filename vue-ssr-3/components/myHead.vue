<template>
    <div class="my-head">
        <h3>我是头部</h3>
        <nav>
            <nuxt-link to="/">首页</nuxt-link>
            <nuxt-link to="/company">company</nuxt-link>
            <nuxt-link to="/home">home</nuxt-link>
            <nuxt-link to="/about">about</nuxt-link>
            <nuxt-link to="/test1">test1</nuxt-link>
            <nuxt-link to="/test2">test2</nuxt-link>

            <!-- <router-link to="/">首页</router-link>
            <router-link to="/company">company</router-link>
            <router-link to="/home">home</router-link>
            <router-link to="/test1">test1</router-link>
            <router-link to="/test2">test2</router-link> -->
        </nav>
    </div>
</template>
<style lang="less" scoped>
.my-head {
    height: 88px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a {
        margin-right: 20px;
        margin-top: 10px;
    }
}
</style>