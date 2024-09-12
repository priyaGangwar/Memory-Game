module.exports = {
    testEnvironment: 'jsdom',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
  };
  module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  };
  