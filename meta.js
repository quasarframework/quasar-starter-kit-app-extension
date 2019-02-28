const path = require('path')

const {
  printMessage
} = require('./utils')

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Quasar App Extension name (without prefix)',
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
      message: 'Check the scripts needed for your App Extension:',
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
    'src/install.js': 'preset.install',
    'src/prompts.js': 'preset.prompts',
    'src/uninstall.js': 'preset.uninstall'
  },
  complete: function(data, { chalk }) {
    printMessage(data, chalk)
  }
}
