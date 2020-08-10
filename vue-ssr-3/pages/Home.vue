<template>
  <div class="home">
    <h2>home页面标题</h2>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ul>
      <li v-for="item in list" :key="item">我是渲染的{{ item }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.list = new Array(5).toString().split(',').map((v, index) => index);
  },
  // components: {
  //   HelloWorld
  // }
}
</script>

<style lang="less" scoped>
.home {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
