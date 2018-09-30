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
  rxdb.plugin(require('pouchdb-adapter-http'))
  await db.collection({
    name: 'zeit',
    schema: zeitSchema,
  })
  const orte = await db.collection({
    name: 'ort',
    schema: ortSchema,
  })
  const ortReplicationState = db.ort.sync({
    remote: 'http://localhost:5984/erfassen/', // remote database. This can be the serverURL, another RxCollection or a PouchDB-instance
    waitForLeadership: true, // (optional) [default=true] to save performance, the sync starts on leader-instance only
    direction: {
      // direction (optional) to specify sync-directions
      pull: true, // default=true
      push: true, // default=true
    },
    options: {
      // sync-options (optional) from https://pouchdb.com/api.html#replication
      live: true,
      retry: true,
    },
    query: db.ort
      .find()
      .where('type')
      .eq('ort'),
  })
  console.log('ort:', { ortReplicationState, orte })
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
