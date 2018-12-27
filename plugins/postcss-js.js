import postcssrc from 'postcss-load-config';
import postcss from 'postcss';

export default (ctx = {}) => ({
  name: 'postcss-js',

  transform: (code, id) =>
    postcssrc(ctx).then(({ plugins, options }) => {
      options.from = id;

      return postcss(plugins)
        .process(code, options)
        .then(({ css }) => ({
          code: css,
          map: { mappings: '' },
        }));
    }),
});
