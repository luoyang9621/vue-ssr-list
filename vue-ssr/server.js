// const Vue = require('vue');
const server = require('express')();
const express = require('express');
// const renderer = require('vue-server-renderer').createRenderer();
const fs = require('fs');
const path = require('path');
// const HistoryRoute = require('connect-history-api-fallback');
const resolveDir = file => path.resolve(__dirname, file);
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

server.use(express.static(path.join(__dirname, 'dist')));

const { createBundleRenderer } = require('vue-server-renderer');
const bundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');


/* 模拟window对象逻辑 */
const resourceLoader = new jsdom.ResourceLoader({
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
});// 设置UA
const dom = new JSDOM('', {
    // url: resolveDir('./src/index.temp.html'),
    // url: '',
    resources: resourceLoader
});

global.window = dom.window;
global.document = window.document;
global.navigator = window.navigator;
window.nodeis = true //给window标识出node环境的标志位

// console.log('path===', resolveDir("./src/index.temp.html"));
const renderer = createBundleRenderer(bundle, {
    runInNewContext: false,
    template: fs.readFileSync(resolveDir('./src/index.temp.html'), 'utf-8'),
    // template: '',
    clientManifest: clientManifest,
    basedir: resolveDir('./dist'),
    runInNewContext: false
});

server.use('/', async (req, res, next) => {
    console.log('req，后端有接口请求', Date.now());
    const url = req.url;
    const context = {
        title: "ssr test server title",
        selfKey: '自定义属性字段',
        url
    };
    try {
        // 将 context 数据渲染为 HTML
        renderer.renderToString(context, (err, html) => {
            res.set('Content-Type', 'text/html');
            if (err) {
                if (err.url) {
                    res.redirect(err.url);
                } else {
                    console.log('server renderToString错误=', err);
                    res.status(err.code || 500).send(err);
                }
            } else {
                res.send(html);
            }
        });
    } catch (error) {
        console.log('err222', error);
    }
});

server.listen(1235, () => {
    console.log('服务器已经启动在1235');
});
