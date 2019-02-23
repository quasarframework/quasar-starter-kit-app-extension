/**
 * Quasar App Extension uninstall script
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/UninstallAPI.js
 */

module.exports = function (api) {
	console.log('api.extId', api.extId)
	console.log('api.appDir', api.appDir)
	console.log('api.resolve.app(src)', api.resolve.app('src'))
	console.log('api.hasExtension(api.extId)', api.hasExtension(api.extId))
	console.log('api.hasExtension(test)', api.hasExtension('test'))
	console.log('api.hasExtension(bogus)', api.hasExtension('bogus'))
	console.log('api.prompts', api.prompts)

	api.removePath('./a.js')
	api.removePath('./src/my-init.js')

	api.onExitLog(`
  There you go... uninstalled it.
  `)

	api.onExitLog(`
  More exitlog
  `)
}
