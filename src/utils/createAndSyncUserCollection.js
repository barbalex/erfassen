import rxdb from 'rxdb'
import pouchdbAdapterIdb from 'pouchdb-adapter-idb'

import userDbNameFromUserEmail from './userDbNameFromUserEmail'
import userDocSchema from '../schemas/userDoc.json'
import couchBaseUrl from './couchBaseUrl'

rxdb.plugin(pouchdbAdapterIdb)

export default async ({ authState, email }) => {
  //console.log('createAndSyncUserCollections', { authState })
  const { dbs, syncs } = authState.state
  // create userDoc Collection
  // then sync it
  const userDbName = userDbNameFromUserEmail(email)
  //console.log('createAndSyncUserCollections', { dbs, syncs })
  let userDb
  try {
    userDb = await rxdb.create({
      name: userDbName,
      adapter: 'idb',
      // force pouch to always include credentials
      // see: https://github.com/pouchdb-community/pouchdb-authentication/issues/239#issuecomment-410489376
      pouchSettings: {
        fetch(url, opts) {
          opts.credentials = 'include'
          return fetch(url, opts)
        },
      },
    })
    await userDb.collection({
      name: 'user',
      schema: userDocSchema,
      // force pouch to always include credentials
      // see: https://github.com/pouchdb-community/pouchdb-authentication/issues/239#issuecomment-410489376
      pouchSettings: {
        fetch(url, opts) {
          opts.credentials = 'include'
          return fetch(url, opts)
        },
      },
    })
  } catch (error) {
    if (error.message.includes('already exists')) {
      console.log('user db already exists')
      return
    } else {
      throw error
    }
  }
  authState.addDb({ name: userDbName, db: userDb })
  const isAlreadyBeingSynced = !!syncs && !!syncs[userDbName]
  //console.log('createAndSyncUserCollections', { dbs })
  let sync
  if (!isAlreadyBeingSynced) {
    sync = userDb.user.sync({
      remote: `${couchBaseUrl}/${userDbName}/`,
      options: {
        live: true,
        retry: true,
      },
      query: userDb.user
        .find()
        .where('type')
        .eq('user'),
    })
  }
  authState.addSync({ name: 'user', sync })
  console.log('createAndSyncUserCollection', { dbs, userDb, userDbName, sync })
  return
}
