
const config = {
  "verbose": true,
  "setupFilesAfterEnv": ["./setupTests.js"],
  preset: 'ts-jest',
  // transform: {
  //   '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
  // },
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testEnvironment: 'jsdom',
};

module.exports = config;
