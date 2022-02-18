const { printMessage } = require('./utils')

module.exports = {
  prompts: {
    needOrgName: {
      type: 'confirm',
      message: 'Will you use an organization to publish it? Eg. "@my-org/..."',
      default: false
    },
    orgName: {
      when: 'needOrgName',
      type: 'input',
      message: 'Organization name, eg. "my-org"',
      validate: val => val && val.length > 0
    },
    name: {
      type: 'input',
      message: 'Quasar App Extension ext-id (without "quasar-app-extension" prefix), eg. "my-ext"',
      validate: val => val && val.length > 0
    },

    description: {
      type: 'input',
      message: 'Project description',
      default: 'A Quasar App Extension'
    },

    author: {
      type: 'input',
      message: 'Author'
    },

    license: {
      type: 'input',
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
      type: 'input',
      message: 'Repository type',
      default: 'git'
    },
    repositoryURL: {
      type: 'input',
      message: 'Repository URL (eg: https://github.com/quasarframework/quasar)'
    },
    homepage: {
      type: 'input',
      message: 'Homepage URL'
    },
    bugs: {
      type: 'input',
      message: 'Issue reporting URL (eg: https://github.com/quasarframework/quasar/issues)'
    }
  },

  filters: {
    'src/install.js': 'preset.install',
    'src/prompts.js': 'preset.prompts',
    'src/uninstall.js': 'preset.uninstall'
  },

  complete: function(data, { chalk }) {
    printMessage(data, chalk)
    // Triggers git auto-initialization if Quasar CLI version allows
    return Promise.resolve()
  }
}
