module.exports = function(wallaby) {
  return {
    autoDetect: true,
    files: [
      'packages/*/src/**/*.{ts,tsx}',
      'packages/*/tests/**/*.{ts,tsx}',
      '!packages/*/tests/**/*.test.{ts,tsx}',
    ],
    tests: [
      'packages/*/tests/**/*.test.{ts,tsx}',
      '!packages/*/tests/e2e/*.test.{ts,tsx}',
    ],
    env: {
      type: 'node',
    },

    hints: {
      ignoreCoverageForFile: /ignore file coverage/
    },


    resolveGetters: true,

    logLimits: {
      inline: {
        depth: 20,
      },
      values: {
        default: {
          stringLength: 3000,
        },
        autoExpand: {
          stringLength: 8192,
          elements: 5000,
          depth: 10,
        }
      },
    },
  
  }
} 
