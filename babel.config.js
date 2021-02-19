module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/env',
      {
        modules: 'commonjs',
        targets: {
          node: 12
        }
      }
    ]
  ];
  const plugins = [
    ['@babel/transform-runtime', {regenerator: true}],
    ['@babel/proposal-decorators', {legacy: true}],
    ['@babel/proposal-class-properties', {loose: true}],
    '@babel/proposal-object-rest-spread',
    '@babel/syntax-dynamic-import',
    'add-module-exports'
  ];

  return {
    presets,
    plugins
  };
};
