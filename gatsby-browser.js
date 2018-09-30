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
  /**
   * TODO on startup
   * 1. create user collection and sync it with userDb
   * 2. extract list of projects
   * 3. loop all projects
   * 4. extract list of tables from projectDef doc
   * 5. create collections for tables, querying only their own type
   * 6. start syncing collections
   */
  /**
   * TODO
   * 1.  on create user (server-side)
   * 1.1 create userDb
   * 1.2 find projects with users email in projectDef.users and list them in userDb.projects
   * 2. creating new db's (user-side)
   * 2.1 name it userName_projectName (replace @ & . with $$ & $)
   * 2.2 create projectDef doc
   * 2.3 add projectDef.users
   * 2.4 add projectDef.billing
   * 2.5 check billing validity?
   * 3.  on new db (server-side)
   * 3.1 loop projectDef.users
   * 3.2 ensure dbName is included in every user's userDb.projects
   * 4.  on edit
   */
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
