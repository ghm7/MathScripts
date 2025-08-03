import { createDefaultPreset, type JestConfigWithTsJest } from 'ts-jest';

const presetConfig = createDefaultPreset({
  //...options
});

const jestConfig: JestConfigWithTsJest = {
  ...presetConfig,
  resolver: 'ts-jest-resolver',
  testMatch: ['**/*.test.ts'],
};

export default jestConfig;
