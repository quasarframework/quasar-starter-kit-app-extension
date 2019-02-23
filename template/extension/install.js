/**
 * Quasar App Extension install script
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

module.exports = function (api) {
	console.log('api.quasarAppVersion', api.quasarAppVersion)
	/*
	console.log('api.extId', api.extId)
	console.log('api.appDir', api.appDir)
	console.log('api.resolve.app(src)', api.resolve.app('src'))
	console.log('api.hasExtension(api.extId)', api.hasExtension(api.extId))
	console.log('api.hasExtension(test)', api.hasExtension('test'))
	console.log('api.hasExtension(bogus)', api.hasExtension('bogus'))
	console.log('api.prompts', api.prompts)
	*/

	api.extendPackageJson({
		beautiful: true,
		scripts: {
			myscript: 'quasar info'
		}
	})

	// use the rawcopy version of render
	api.render('./templates', {}, true)

	api.onExitLog(`
  Exit log print this.
  `)
}
