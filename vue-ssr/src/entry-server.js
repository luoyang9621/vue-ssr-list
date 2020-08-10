import { createApp } from "./main";

export default context => {
    // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
    // 以便服务器能够等待所有的内容在渲染前，
    // 就已经准备就绪。
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp(context);
        const { fullPath } = router.resolve(context.url).route;
        if (fullPath !== context.url) {
          return reject({ url: fullPath });
        }
    
        router.push(context.url);
        console.log('context.url fullPath', context.url, fullPath);

        // 等到 router 将可能的异步组件和钩子函数解析完
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents();
            
            console.log('matchedComponents', matchedComponents.length);
            // 匹配不到的路由，执行 reject 函数，并返回 404
            if (!matchedComponents.length) {
                return reject({
                    code: 404,
                    msg: 'entry-server error'
                });
            }
            // Promise 应该 resolve 应用程序实例，以便它可以渲染
            Promise.all(matchedComponents.map(Component => {
                if (Component.asyncData) {
                    return Component.asyncData({
                      store,
                      route: router.currentRoute
                    });
                }
            })).then(() => {
                context.state = store.state;
                console.log('所有组件解析完毕', Date.now());
                resolve(app);
            }).catch((err) => {
                console.log('entry-server Promise err', err);
                reject(err);
            })
        }, (err) => {
            console.log('路由入口 onReady', err);
            reject(err);
        });
    });
};