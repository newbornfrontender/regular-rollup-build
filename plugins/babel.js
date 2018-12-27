import { transform } from '@babel/core';

export default (options = {}) => ({
  name: 'babel',

  transform: (code) => ({
    code: transform(code, options).code,
    map: { mappings: '' },
  }),
});
