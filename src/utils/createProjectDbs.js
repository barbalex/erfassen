import rxdb from 'rxdb'

import pouchdbAdapterHttp from 'pouchdb-adapter-http'
import pouchdbAdapterIdb from 'pouchdb-adapter-idb'

import projectDefMessageSchema from '../schemas/projectDefMessage.json'

rxdb.plugin(pouchdbAdapterHttp)
rxdb.plugin(pouchdbAdapterIdb)

export default async authState => {
  // TODO:
  // 1. fetch userDoc and it's project list
  // 2. for every project create an rxdb
  // 3. for every project fetch typeDefs doc and extract table list
  // 4. for every table create collection and sync it
  let messageDb
  try {
    messageDb = await rxdb.create({
      name: 'messages',
      adapter: 'idb',
    })
  } catch (error) {
    throw error
  }
  // maybe use
  // https://github.com/rafamel/rxdb-utils#models
  // to make this easier
  await messageDb.collection({
    name: 'projectdef',
    schema: projectDefMessageSchema,
    // force pouch to always include credentials
    // see: https://github.com/pouchdb-community/pouchdb-authentication/issues/239#issuecomment-410489376
    pouchSettings: {
      fetch(url, opts) {
        opts.credentials = 'include'
        return fetch(url, opts)
      },
    },
  })
  authState.addDb({ name: 'messages', db: messageDb })
  /**
   * create global sync object
   * and pass it sync responces
   * reason: be able to check if replication exists already
   * before starting new one
   */
  console.log('createMessageDb', { messageDb })
  const projectdefSync = await messageDb.projectdef.sync({
    remote: 'http://localhost:5984/messages/',
    options: {
      live: true,
      retry: true,
    },
    query: messageDb.projectdef
      .find()
      .where('type')
      .eq('projectDef'),
  })

  authState.addSync({ name: 'messageDbProjectDef', sync: projectdefSync })
}
