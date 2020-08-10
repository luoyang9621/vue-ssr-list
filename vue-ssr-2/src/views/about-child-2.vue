<template>
  <div class="about">
    <h1>这个是about页面的子页面222,第二个</h1>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: "about第二个子页面title",
    meta: [
      {
        name: "keywords",
        content: "about第二个子页面的关键字22",
      },
    ],
  },
  name: "About-2",
  created() {
    console.log("我是about第二个子页面");
  },
};
</script>
<style lang="less" scoped>
.about {
  width: 100%;
  min-height: 400px;
  background-color: blue;
  color: #fff;
}
</style>
