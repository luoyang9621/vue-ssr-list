const prerenderSpaPlugin = require('prerender-spa-plugin');
const Renderer = prerenderSpaPlugin.PuppeteerRenderer;
const path = require('path');


module.exports = {
    configureWebpack: (config) => {
        if (process.env.NODE_ENV !== 'production') return;
        return {
            plugins: [
                new prerenderSpaPlugin({
                    staticDir: path.join(__dirname, 'dist'),
                    routes: ['/', '/company', '/test1', '/test2', '/about/about-child-1', '/about/about-child-2'],
                    renderer: new Renderer({
                        renderAfterDocumentEvent: "render-event",
                        /*渲染时显示浏览器窗口。用于调试。*/
                        headless: false,
                        inject:{
                            foo:'bar'
                        },
                        /*延时渲染 如果页面有从接口获取的数据，最好加上延时渲染*/
                        captureAfterTime: 5000
                    })
                })
            ]
        }
    }
}