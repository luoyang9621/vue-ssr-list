<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ul>
      <li v-for="item in list" :key="item">我是2秒后渲染的{{ item }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
   metaInfo: {
       title:'home页面title',
       meta:[{
           name: 'keywords',
           content: 'home关键字'
       }]
   } ,
  name: 'Home',
  data() {
    return {
      list: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.list = new Array(5).toString().split(',').map((v, index) => index);
    }, 2000);
  },
  // components: {
  //   HelloWorld
  // }
}
</script>
