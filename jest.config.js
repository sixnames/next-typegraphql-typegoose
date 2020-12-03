const tsPreset = require('ts-jest/jest-preset');
const mongoPreset = require('@shelf/jest-mongodb/jest-preset');

module.exports = {
  ...tsPreset,
  ...mongoPreset,
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./api/test/jest.setup.ts'],
  modulePathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/cypress/'],
};
