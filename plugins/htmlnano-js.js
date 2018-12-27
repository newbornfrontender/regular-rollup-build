import htmlnano from 'htmlnano';

export default (options = {}) => ({
  name: 'htmlnano-js',

  transform: (code) =>
    htmlnano.process(code, options).then(({ html }) => ({
      code: html,
      map: { mappings: '' },
    })),
});
