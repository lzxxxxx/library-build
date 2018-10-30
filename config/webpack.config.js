const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './app.jsx',
        // vendor: ['react','react-dom']
    },
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [//注意loaders 是倒着执行的
                    'style-loader',//在文档head中添加style 标签；注意不是打包的时候加上去的，而是js 运行的时候append 的
                    'css-loader',//把css文件转成字符串，包括在css 文件中import的其他文件
                    'sass-loader'//将scss 转成css
                ]
            },{
                test: /\.jsx/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',//默认是async，改成 All 使得不止应用于按需加载的模块
            cacheGroups: {//缓存组
                default: {
                    reuseExistingChunk: false
                }
            }
        }
    },
    resolve: {
        extensions: [".jsx", ".js", ".json"]//可以在引入模块的时候省略后缀 index.***
    },
/*     externals:{
        jQuery: $
        //如果直接在html 中通过 script 的方式引入，但是代码中用到了$，即注释掉了import $ from 'jQuery'，需要在这里声明。这样可以分开打包，获取也并行获取，可以优化加载速度
    } */
}