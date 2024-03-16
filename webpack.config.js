const path = require('path') // Node usa CommonJs

module.exports = {
 mode: 'development',
 entry: './src/main.js',
 output:{
    path: path.resolve(__dirname, 'public', 'assets', 'js'), // primeito path e a chave e o segundo vem da constante
    filename: 'bundle.js'
},
module: {
    rules:[{
        exclude: /node_modules/,
        test:/\.js$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/env']
            }
        }
    },{
       test: /\.css$/,
       use:  ['style-loader' ,  'css-loader'] // npm 'style-loader' ,  'css-loader'
    }]
},
devtool: 'source-map'
};