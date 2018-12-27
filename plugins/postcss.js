import { readFile, writeFile } from 'fs';
import postcssrc from 'postcss-load-config';
import postcss from 'postcss';

export default (ctx = {}) => ({
  name: 'postcss',

  buildEnd: () =>
    readFile(ctx.from, (err, css) =>
      postcssrc(ctx).then(({ plugins, options }) => {
        options.from = ctx.from;
        options.to = ctx.to;

        return postcss(plugins)
          .process(css, options)
          .then(({ css }) => writeFile(ctx.to, css, () => true));
      }),
    ),
});
