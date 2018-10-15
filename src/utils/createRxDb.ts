import rxdb from 'rxdb'

import pouchdbAdapterHttp from 'pouchdb-adapter-http'
import pouchdbAdapterIdb from 'pouchdb-adapter-idb'

import projectDefMessageSchema from '../schemas/projectDefMessage.json'
import { Props as AuthStateProps } from '../state/Auth'

rxdb.plugin(pouchdbAdapterHttp)
rxdb.plugin(pouchdbAdapterIdb)

export default async (AuthState: AuthStateProps) => {
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
  AuthState.addDb({ name: 'messages', db: messageDb })
  // maybe use
  // https://github.com/rafamel/rxdb-utils#models
  // to make this easier
  await messageDb.collection({
    name: 'projectdef',
    schema: projectDefMessageSchema,
  })
  /**
   * create global sync object
   * and pass it sync responces
   * reason: be able to check if replication exists already
   * before starting new one
   */
  console.log('createRxDb', { messageDb })
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

  AuthState.addSync({ name: 'projectDef', sync: projectdefSync })
}
