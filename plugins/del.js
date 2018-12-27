import del from 'del';

export default (options = '') => ({
  name: 'del',

  buildStart: () => del(options),
});
