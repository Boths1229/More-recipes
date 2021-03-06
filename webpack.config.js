import webpack from 'webpack';
import path from 'path';
import dotenv from 'dotenv-webpack';

export default {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './client/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'client/dist/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './client/dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new dotenv({
      path: './.env',
      safe: false
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        enforce: 'pre',
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        include: path.join(__dirname, '/client')
      },
      {
        test: /\.(jpg|png|svg|jpeg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './images/[hash].[ext]',
          },
        },
      },
      {
        test: /(\.s?css)$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  }
};
