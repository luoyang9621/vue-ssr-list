<template>
  <div id="app">
    <div id="nav">
      <!-- 由于a链接没有重定向，所以需要 -->
      <a href="/">Home</a>
      <a href="/about/about-child-1">About</a>
      <a href="/company/">company</a>
      <a href="/test1/">test1</a>
      <a href="/test2/">test2</a>

      <!-- <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/company">company</router-link>
      <router-link to="/test1">test1</router-link>
      <router-link to="/test2">test2</router-link> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin-right: 20px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
