module.exports = {
  verbose: true,
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/.jest/register-context.js'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
