const { printMessage } = require('./utils')

module.exports = {
  prompts: {
    name: {
      type: 'string',
      message: 'Quasar App Extension ext-id (the short name, without prefix)',
      validate: val => val && val.length > 0
    },

    description: {
      type: 'string',
      message: 'Project description',
      default: 'A Quasar App Extension'
    },

    author: {
      type: 'string',
      message: 'Author'
    },

    license: {
      type: 'string',
      message: 'License type',
      default: 'MIT'
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
      message: 'Homepage URL',
      default ({ repositoryURL }) {
        return repositoryURL
      }
    },
    bugs: {
      type: 'string',
      message: 'Issue reporting URL (eg: https://github.com/quasarframework/quasar/issues)',
      default ({ repositoryURL }) {
        return `${repositoryURL}${repositoryURL.endsWith('/') ? '' : '/'}issues`
      }
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
