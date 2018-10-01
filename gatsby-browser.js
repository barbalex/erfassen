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

rxdb.plugin(require('pouchdb-adapter-http'))

exports.onClientEntry = async () => {
  rxdb.plugin(require('pouchdb-adapter-idb'))
  let db
  try {
    db = await rxdb.create({
      name: 'erfassen',
      adapter: 'idb',
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
  db.ort.sync({
    remote: 'http://localhost:5984/erfassen/',
    options: {
      live: true,
      retry: true,
    },
    query: db.ort
      .find()
      .where('type')
      .eq('ort'),
  })
  await db.collection({
    name: 'beob',
    schema: beobSchema,
  })
  db.beob.sync({
    remote: 'http://localhost:5984/erfassen/',
    options: {
      live: true,
      retry: true,
    },
    query: db.beob
      .find()
      .where('type')
      .eq('beob'),
  })

  app.extend({
    init() {
      this.db = db
    },
  })
  app.init()
}
