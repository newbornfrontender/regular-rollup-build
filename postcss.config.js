const syntax = require('postcss-syntax');

module.exports = ({ production }) => ({
  syntax: syntax({
    rules: [
      {
        test: /\.js$/i,
        extract: 'html',
      },
    ],

    html: 'postcss-html',
  }),

  plugins: {
    'postcss-preset-env': {
      stage: 0,

      features: {
        'nesting-rules': {},
      },

      autoprefixer: production && {
        grid: true,
      },
    },

    cssnano: production && {},
  },
});
