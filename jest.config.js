module.exports = {
    testEnvironment: 'jsdom',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  };
  