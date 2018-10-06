import rxdb, { removeDatabase } from 'rxdb'
import PouchDB from 'pouchdb'

import pouchdbAdapterHttp from 'pouchdb-adapter-http'
import pouchdbAdapterIdb from 'pouchdb-adapter-idb'
import pouchdbAuthentication from 'pouchdb-authentication'

import zeitSchema from '../schemas/zeit.json'
import ortSchema from '../schemas/ort.json'
import beobSchema from '../schemas/beob.json'
import messageSchema from '../schemas/message.json'

rxdb.plugin(pouchdbAdapterHttp)
rxdb.plugin(pouchdbAdapterIdb)

export default async () => {
  let db
  try {
    db = await rxdb.create({
      name: 'erfassen',
      adapter: 'idb',
      queryChangeDetection: false, // <- queryChangeDetection (optional, default: false)
      // only needed in dev mode
      // because db is rebuilt on every live reload
      //ignoreDuplicate: true,
    })
  } catch (error) {
    throw error
  }
  // maybe use
  // https://github.com/rafamel/rxdb-utils#models
  // to make this easier
  const mDB = await db.collection({
    name: 'message',
    schema: messageSchema,
  })
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
  PouchDB.plugin(pouchdbAuthentication)
  const authPouch = new PouchDB('auth')
  console.log('createDb, db:', {
    db,
    dbSignup: db.signUp,
    authPouch,
    authPouchSignup: authPouch.signUp,
  })

  return db
}
