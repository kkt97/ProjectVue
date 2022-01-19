const path = require('path');

module.exports = {
  //productionSourceMap: false, // .map file
  publicPath: process.env.NODE_ENV === 'production' ? '/vue/' : '/',
  // devServer: {
  //   proxy: 'http://localhost:8000',
  // }
};
