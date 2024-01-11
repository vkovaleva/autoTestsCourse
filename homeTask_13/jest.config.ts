import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^app(.*)$': '<rootDir>/src$1',
  },
  testRegex: '.*\\.(test)\\.(ts|js)$',
  coverageProvider: 'v8',
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        pageTitle: 'Test Report',
        publicPath: './reports',
        filename: 'test-report.html',
        enableMergeData: true,
        dataMergeLevel: 3,
      },
    ],
  ],
};
export default config;
