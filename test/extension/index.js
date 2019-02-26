/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

module.exports = function (api, ctx) {
	console.log('api.quasarAppVersion', api.quasarAppVersion)
	/*
	console.log('api.ctx', api.ctx)
	console.log('ctx', ctx)
	console.log('api.extId', api.extId)
	console.log('api.appDir', api.appDir)
	console.log('api.resolve.app(src)', api.resolve.app('src'))
	console.log('api.hasExtension(api.extId)', api.hasExtension(api.extId))
	console.log('api.hasExtension(bogus)', api.hasExtension('bogus'))
	console.log('api.prompts', api.prompts)

	// api.compatibleWithQuasarApp('1.0.0')

	api.extendQuasarConf(conf => {
		console.log('extendQuasarConf')
		console.log('  conf', conf !== void 0)
		console.log('conf.css', conf.css)
		// conf.boot.push('my-boot')
	})

	api.chainWebpack((chain, invoke) => {
		console.log('chainWebpack called')
		console.log('  chain', chain !== void 0)
		console.log('  invoke', invoke)
	})

	api.extendWebpack((cfg, invoke) => {
		console.log('extendWebpack called')
		console.log('  cfg', cfg !== void 0)
		console.log('  invoke', invoke)
	})

	api.registerCommand('beep', ({ args, params }) => {
		console.log('Beep command called')
		console.log('args', args)
		console.log('params', params)
	})

	api.beforeDevStart(() => {
		console.log('before dev kicks in')
	})
		*/}
