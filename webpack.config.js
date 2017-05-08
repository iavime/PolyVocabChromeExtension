
module.exports = function(env) {
  return require(`./webpack_configs/webpack.${env}.js`);
}
