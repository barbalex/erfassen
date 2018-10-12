import rxdb from 'rxdb'
import pouchdbAdapterIdb from 'pouchdb-adapter-idb'

rxdb.plugin(pouchdbAdapterIdb)

import { Props as rxDbStateProps } from '../state/RxDb'
import RxDbState from '../state/RxDb'
import userDbNameFromUserName from './userDbNameFromUserName'
import userDocSchema from '../schemas/userDoc.json'

export default async ({
  //rxDbState,
  email,
}: {
  //rxDbState: rxDbStateProps
  email: string
}) => {
  const rxDbState = new RxDbState()
  console.log('createAndSyncUserCollections', { rxDbState })
  const { dbs, syncs } = rxDbState.state
  // create userDoc Collection
  // then sync it
  const userDbName = userDbNameFromUserName(email)
  console.log('createAndSyncUserCollections', { dbs, syncs })
  let userDb
  try {
    userDb = await rxdb.create({
      name: userDbName,
      adapter: 'idb',
    })
    await userDb.collection({
      name: 'user',
      schema: userDocSchema,
    })
  } catch (error) {
    if (error.message.includes('already exists')) {
      console.log('user db already exists')
      return
    } else {
      throw error
    }
  }
  rxDbState.addDb({ name: userDbName, db: userDb })
  const isAlreadyBeingSynced: boolean = !!syncs && !!syncs[userDbName]
  console.log('createAndSyncUserCollections', { dbs })
  let sync
  if (!isAlreadyBeingSynced) {
    sync = userDb.user.sync({
      remote: `http://localhost:5984/${userDbName}/`,
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
  rxDbState.addSync({ name: userDbName, sync })
  console.log('Signup', { dbs, userDbName })
}
