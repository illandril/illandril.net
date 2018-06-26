const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const VERSION_ID = Date.now();
const CSS_NAME = 's.css';
const JS_NAME = 's.js';
const DIST_PATH = path.resolve(__dirname, 'dist');

const imagesURLLoader = {
  test: /images\/.+$/,
  use: [{
    loader: 'url-loader',
    options: {
      regExp: /images\/(.+)\.[^.]+$/,
      limit: 1,
      name: 'images/[1]-[hash].[ext]',
    }
  }],
};

module.exports = [
  {
    mode: "production",
    entry: ['./src/html/index.pug','./src/html/error/404.pug'],
    output: {
      filename: 'tmp/html-bundle.js',
      path: DIST_PATH,
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                regExp: /html\/(.+)\.pug/,
                name: '[1].html',
              },
            },
            {
              loader: 'extract-loader'
            },
            {
              loader: 'html-loader',
              options: {
                minimize: true,
                interpolate: true,
              }
            },
            {
              loader: 'pug-html-loader',
            },
          ],
        },
        {
          test: /favicons\/.+$/,
          use: [{
            loader: 'url-loader',
            options: {
              regExp: /favicons\/(.+)\.[^.]+$/,
              limit: 1,
              name: 'favicons/[1]-[hash].[ext]',
            }
          }],
        },
        imagesURLLoader,
      ]
    }
  },
  {
    mode: "production",
    entry: './src/scss/app.scss',
    output: {
      filename: 'tmp/style-bundle.js',
      path: DIST_PATH,
    },
    module: {
      rules: [{
          test: /\.scss$/,
          use: [{
              loader: 'file-loader',
              options: {
                name: CSS_NAME,
              },
            },
            {
              loader: 'extract-loader'
            },
            {
              loader: 'css-loader',
              options: {
                'minimize': true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer({
                  grid: false
                })],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['./node_modules'],
              },
            },
          ],
        },
        imagesURLLoader,
      ]
    },
  },
  {
    mode: "production",
    entry: './src/js/app.js',
    output: {
      filename: JS_NAME,
      path: DIST_PATH,
    },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      }],
    },
  },
];
