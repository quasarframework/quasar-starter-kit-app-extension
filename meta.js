const path = require('path')

const {
  printMessage
} = require('./utils')

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Quasar App Extension ext-id (the short name, without prefix)',
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Quasar App Extension',
    },
    author: {
      type: 'string',
      message: 'Author',
    },
    license: {
      type: 'string',
      message: 'License type',
      default: 'MIT'
    },
    repositoryType: {
      type: 'string',
      message: 'Repository type',
      default: 'git'
    },
    repositoryURL: {
      type: 'string',
      message: 'Repository URL (eg: https://github.com/quasarframework/quasar)'
    },
    homepage: {
      type: 'string',
      message: 'Homepage URL'
    },
    bugs: {
      type: 'string',
      message: 'Issue reporting URL (eg: https://github.com/quasarframework/quasar/issues)'
    },
    preset: {
      type: 'checkbox',
      message: 'Pick the needed scripts:',
      choices: [
        {
          name: 'Prompts script',
          value: 'prompts'
        },
        {
          name: 'Install script',
          value: 'install'
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
