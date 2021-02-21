
module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('html-loader')
      .loader('html-loader')
      .end()
      .end()
      .oneOf('external')
      .use('url-loader')
      .loader('url-loader');
  },
};
