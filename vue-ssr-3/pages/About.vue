<template>
    <div class="about">
        <div class="common-show">
            我是about页面的父页面
        </div>
        <nav class="nav-common">
            <nuxt-link to="/about/about-child-1">child-1</nuxt-link>
            <nuxt-link to="/about/about-child-2">child-2</nuxt-link>
        </nav>
        <nuxt-child></nuxt-child>
    </div>
</template>

<style lang="less" scoped>

</style>