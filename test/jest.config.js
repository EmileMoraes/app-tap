module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
  testPathIgnorePatterns: ['dist', 'jest.config.js'],
  modulePathIgnorePatterns: ['test/mock'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  rootDir: '../'
};
