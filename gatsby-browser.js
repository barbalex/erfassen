/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const rxdb = require('rxdb')
const app = require('ampersand-app')

exports.onClientEntry = async () => {
  rxdb.plugin(require('pouchdb-adapter-idb'))
  let db
  try {
    db = await rxdb.create({
      name: 'erfassen', // <- name
      adapter: 'idb', // <- storage-adapter
      multiInstance: true, // <- multiInstance (optional, default: true)
      queryChangeDetection: false, // <- queryChangeDetection (optional, default: false)
    })
  } catch (error) {
    throw error
  }
  /*
  const er_z$$z$ch_test = await db.collection({
    name: 'er_z$$z$ch_test',
    schema: mySchema,
  })*/
  app.extend({
    init() {
      this.db = db
    },
  })
  app.init()
}
