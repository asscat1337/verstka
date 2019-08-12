const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
              'css-loader', 
              'sass-loader',
            ]
        })
      },
      {
        test:/\.(jpg|gif|png|svg)$/,
        use:[
        {
          loader:'file-loader',
          options:{
            name:'src/img[name].[ext]'
          }
        }
      ]
      },
      {
        test:/\.(eot|ttf|woff|woff2)$/,
        loader:'file-loader',
        options:{
          name:'src/fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
]
};