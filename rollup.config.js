import nodeResolve from 'rollup-plugin-node-resolve';

import del from './plugins/del';
import postcssJs from './plugins/postcss-js';
import postcss from './plugins/postcss';
import babel from './plugins/babel';
import htmlnanoJs from './plugins/htmlnano-js';
import terser from './plugins/terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'components/index.js',

  output: {
    format: 'esm',
    dir: 'public',
  },

  plugins: [
    production && del('public/*.{html,css,js}'),

    nodeResolve({
      jsnext: true,
      browser: true,
      modulesOnly: true,
    }),

    postcss({
      production,
      from: 'index.css',
      to: 'public/index.css',
    }),

    postcssJs({
      production,
    }),

    babel(),

    production && htmlnanoJs(),

    production &&
      terser({
        mangle: {
          module: true,
        },
      }),
  ],

  experimentalCodeSplitting: true,
};
