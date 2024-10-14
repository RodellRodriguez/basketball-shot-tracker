module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@basketball-tracker/common': '../common/src',
          },
        },
      ],
    ],
  };
};