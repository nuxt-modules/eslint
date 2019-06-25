module.exports = {
  testEnvironment: 'node',
  forceExit: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'lib/**/*.js',
    '!lib/utils.js'
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/lib/$1',
    '^~~$': '<rootDir>',
    '^@@$': '<rootDir>',
    '^@/(.*)$': '<rootDir>/lib/$1'
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
}
