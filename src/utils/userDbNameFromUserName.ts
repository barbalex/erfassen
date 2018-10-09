module.exports = (name: string): string =>
  'user_' +
  name
    .toLowerCase()
    .replace('@', '_at_')
    .replace('.', '_p_')
