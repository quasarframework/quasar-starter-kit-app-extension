const path = require('path')

const {
  printMessage
} = require('./utils')

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Quasar CLI Extension name (without prefix)',
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Quasar CLI Extension',
    },
    author: {
      type: 'string',
      message: 'Author',
    },
    preset: {
      type: 'checkbox',
      message: 'Check the scripts needed for your cli-extension:',
      choices: [
        {
          name: 'Install script',
          value: 'install'
        },
        {
          name: 'Prompts script',
          value: 'prompts'
        },
        {
          name: 'Uninstall script',
          value: 'uninstall'
        }
      ]
    }
  },
  filters: {
    'install.js': 'preset.install',
    'prompts.js': 'preset.prompts',
    'uninstall.js': 'preset.uninstall'
  },
  complete: function(data, { chalk }) {
    printMessage(data, chalk)
  }
}
