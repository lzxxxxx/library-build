const path = require('path');

module.exports = {
    entry: './app.jsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',//在文档head中添加style 标签；注意不是打包的时候加上去的，而是js 运行的时候append 的
                    'css-loader',//给css文件转化成commonjs 模块
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
    resolve: {
        extensions: [".jsx", ".js", ".json"]//可以在引入模块的时候省略后缀 index.***
    }
}