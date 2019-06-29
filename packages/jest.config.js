'use strict';

module.exports = {
  rootDir: './src',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [
          151001, // warn: consider setting `esModuleInterop`
        ],
      },
    },
  },
};
