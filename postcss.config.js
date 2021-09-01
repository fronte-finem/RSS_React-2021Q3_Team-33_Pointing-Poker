const autoprefixer = require('autoprefixer');

module.exports = {
  modules: {
    localsConvention: 'camelCaseOnly',
  },
  plugins: [
    require('postcss-nested'),
    autoprefixer({
      flexbox: false,
    }),
  ],
};
