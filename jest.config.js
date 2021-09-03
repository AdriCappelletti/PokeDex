module.exports = {
  verbose: true,
  rootDir: 'src',
  coverageDirectory: '../coverage/',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '.*fixture.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '.*fixture.js'],
};
