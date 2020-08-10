const vueSsrServerPlugin = require('vue-server-renderer/server-plugin');
const vueSsrClientPlugin = require('vue-server-renderer/client-plugin');
const nodeExternals = require('webpack-node-externals');
const minCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('lodash.merge');
const webpack = require('webpack');
const TARGET_NODE = process.env.WEBPACK_TARGET === 'node';
const target = TARGET_NODE ? 'server' : 'client';
console.log('TARGET_NODE===============', TARGET_NODE);

module.exports = {
    configureWebpack: (config) => ({
        entry: `./src/entry-${target}.js`,
        devtool: 'source-map',
        target: TARGET_NODE ? "node" : "web",
        node: TARGET_NODE ? undefined : false,
        output: {
            libraryTarget: TARGET_NODE ? "commonjs2" : undefined
        },
        externals: TARGET_NODE ? nodeExternals({
            // 不要外置化 webpack 需要处理的依赖模块。
            // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
            // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
            allowlist: /\.css$/
        }) : undefined,
        optimization: {
            splitChunks: TARGET_NODE ? false : undefined
            // splitChunks: {
            //     chunks: "async",
            //     minSize: 30000,
            //     minChunks: 2,
            //     maxAsyncRequests: 5,
            //     maxInitialRequests: 3
            // }
        },
        plugins: TARGET_NODE ? [new vueSsrServerPlugin()] : [new vueSsrClientPlugin()]
    }),
    chainWebpack: config => {
        config.module
            .rule("vue")
            .use("vue-loader")
            .tap(options => {
                merge(options, {
                    optimizeSSR: false,
                    extractCSS: TARGET_NODE
                });
            });
    }
}