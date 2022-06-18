const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    mode:"development",
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: "index.js",
        clean:true
    },
    devServer: {
        open: true,
        port:30000
    },
    plugins: [
        new HTMLWebpackPlugin({
            template:path.join(__dirname, './public/index.html')
        }),
        new VueLoaderPlugin()
    ],
    module: { 
        rules: [ 
          {
            test: /\.css$/, 
            use: [ "style-loader", "css-loader"]
            },
            {
                test: /\.less$/, 
                use: [ "style-loader", "css-loader","less-loader"]
            },
            {
                test: /\.(png|gif|jepg)$/i,
                type: "asset",
                 parser: {
                    dataUrlCondition: {
                        maxSize:2*1024
                    }
                },
                generator: {
                    filename:'images/[hash:6][ext]'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                type: "asset/resource",
                generator: {
                    filename:'font/[hash:6][ext]'
                }
            },
            {
                test: /\.js$/i,
                exclude: path.join(__dirname, 'node_modules'),
                use: [{
                  loader: 'babel-loader',
                }]
            },
            {
                test: /\.vue/i,
                use: ['vue-loader']
              }
            
        ]
    }
}