/**
 * Prints the final message with instructions of necessary next steps.
 * @param {Object} data Data from questionnaire.
 */
module.exports.printMessage = function (data, { green, yellow }) {
  const message = `
 ${green('[*] Quasar App Extension project initialization finished!')}

To get started:

  ${yellow(
    `${data.inPlace ? '' : `cd ${data.destDirName}\n  `}`
  )}

Documentation can be found at: https://quasar.dev

Quasar is relying on donations to evolve. We'd be very grateful if you can
read our manifest on "Why donations are important": https://quasar.dev/why-donate
Donation campaign: https://donate.quasar.dev
Any amount is very welcomed.
If invoices are required, please first contact razvan@quasar.dev

Please give us a star on Github if you appreciate our work:
https://github.com/quasarframework/quasar

Enjoy! - Quasar Team
`
  console.log(message)
}
