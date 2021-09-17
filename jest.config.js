const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

const FONT = '\\.(eot|otf|ttf|woff|woff2)$';
const IMAGE = '\\.(jpg|jpeg|png|gif|webp|svg)$';
const VIDEO = '\\.(mp4|webm)$';
const AUDIO = '\\.(wav|mp3|m4a|aac|oga)$';
const STYLE = '\\.(css|pcss|styl|less|sass|scss)$';
const FILE_MOCK = '<rootDir>/tests-mocks/file-mock.js';

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
    VITE_DEV_PORT: '42424',
    DEV_MODE: true,
    PROD_MODE: false,
  },
  roots: ['<rootDir>/client/src/', '<rootDir>/server/src/'],
  moduleDirectories: ['node_modules', 'client/src', 'server/src'],
  moduleNameMapper: {
    [FONT]: FILE_MOCK,
    [IMAGE]: FILE_MOCK,
    [VIDEO]: FILE_MOCK,
    [AUDIO]: FILE_MOCK,
    [STYLE]: 'identity-obj-proxy',
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  },
  coverageProvider: 'babel',
  coverageDirectory: '<rootDir>/tests-coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/tests-coverage/',
    '<rootDir>/tests-mocks/',
  ],
};
