import rxdb, { removeDatabase } from 'rxdb'

import pouchdbAdapterHttp from 'pouchdb-adapter-http'
import pouchdbAdapterIdb from 'pouchdb-adapter-idb'

import zeitSchema from '../schemas/zeit.json'
import ortSchema from '../schemas/ort.json'
import beobSchema from '../schemas/beob.json'
import messageSchema from '../schemas/message.json'
import { Props } from '../state/RxDb'

rxdb.plugin(pouchdbAdapterHttp)
rxdb.plugin(pouchdbAdapterIdb)

export default async () => {
  // TODO:
  // 1. fetch userDoc and it's project list
  // 2. for every project create an rxdb
  // 3. for every project fetch typeDefs doc and extract table list
  // 4. for every table create collection and sync it
  let syncs: any = {}
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
  // maybe use
  // https://github.com/rafamel/rxdb-utils#models
  // to make this easier
  await db.collection({
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
  /**
   * create global sync object
   * and pass it sync responces
   * reason: be able to check if replication exists already
   * before starting new one
   */
  syncs.ort = await db.ort.sync({
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
  syncs.beob = db.beob.sync({
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

  return { db, syncs }
}
