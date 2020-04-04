'use strict';

const path = require('path');

const root = __dirname;

module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '^shared/(.*)$': path.resolve(root, 'packages/shared/$1'),
  },
};
