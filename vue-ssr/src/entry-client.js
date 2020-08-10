import Vue from 'vue';

import { createApp } from './main';

const { app, router, store } = createApp();

Vue.mixin({
    beforeRouteUpdate (to, from, next) {
      const { asyncData } = this.$options;
      console.log('注入成功asyncData');
      if (asyncData) {
        asyncData({
          store: this.$store,
          route: to
        }).then(next).catch(next)
      } else {
        next()
      }
    }
});

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}
router.onReady(() => {
    console.log('router beforeResolve', Date.now(), store)
    router.beforeResolve((to, from, next) => {
        const matched = router.getMatchedComponents(to)
        const prevMatched = router.getMatchedComponents(from)
        let diffed = false
        const activated = matched.filter((c, i) => {
            return diffed || (diffed = (prevMatched[i] !== c))
        })
        console.log('router ready', store)
        const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _)
        if (!asyncDataHooks.length) {
            return next()
        }
        Promise.all(asyncDataHooks.map(hook => hook({ store, route: to }))).then(() => {
            next()
        })
        .catch(next)
    })
    app.$mount("#app");
}, (err) => {
    console.log('client router', err);
});