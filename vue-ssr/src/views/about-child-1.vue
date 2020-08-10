<template>
  <div class="about">
    <h1>这个是about页面的子页面1111111</h1>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: "about第一个子页面title",
    meta: [
      {
        name: "keywords",
        content: "about第一个子页面的关键字11",
      },
    ],
  },
  name: "About-1",
  created() {
    console.log("我是about第一个子页面");
  },
};
</script>
<style lang="less" scoped>
.about {
  width: 100%;
  min-height: 400px;
}
</style>
