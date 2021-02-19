const VuePlugin = require('rollup-plugin-vue');
const version = process.env.VERSION || require('./package.json').version;

module.exports = {
  entry: 'src/index.js',
  dest: 'dist/v-paginator.js',
  format: 'umd',
  moduleName: 'VPaginator',
  plugins: [VuePlugin()],
  banner:
    `/**
 * v-paginator v${version}
 * (c) ${new Date().getFullYear()} Sitronik
 * @license MIT
 */`
};

