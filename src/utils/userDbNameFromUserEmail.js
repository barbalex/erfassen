module.exports = email =>
  'user_' +
  email
    .toLowerCase()
    .replace('@', '_at_')
    .replace('.', '_p_')
