<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>下面是子页面</p>
    <p>
      <a href="/about/about-child-1">第一个子页面</a>
      <a href="/about/about-child-2">第二个子页面</a>
    </p>
    <router-view class="about-child"></router-view>
  </div>
</template>
<script>
export default {
  metaInfo: {
       title:'about页面title',
       meta:[{
           name: 'keywords',
           content: 'about的关键字11'
       }]
   } ,
      name: 'About',
    created() {
        console.log('我是about页面');
    }
}
</script>
<style lang="less" scoped>
.about {
  width: 100%;
  min-height: 400px;
  .about-child {
    height: 600px;
    width: 100%;
  }
}
</style>
