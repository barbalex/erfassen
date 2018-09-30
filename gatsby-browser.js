/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const rxdb = require('rxdb')
const app = require('ampersand-app')
const zeitSchema = require('./schemas/zeit.json')
const ortSchema = require('./schemas/ort.json')
const beobSchema = require('./schemas/beob.json')

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
  await db.collection({
    name: 'zeit',
    schema: zeitSchema,
  })
  await db.collection({
    name: 'ort',
    schema: ortSchema,
  })
  await db.collection({
    name: 'beob',
    schema: beobSchema,
  })
  app.extend({
    init() {
      this.db = db
    },
  })
  app.init()
}
