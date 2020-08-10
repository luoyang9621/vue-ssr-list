import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMetaInfo from 'vue-meta-info';

Vue.use(VueMetaInfo);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event')) //与vue.config.js（renderAfterDocumentEvent）事件一致
  }
}).$mount('#app')
