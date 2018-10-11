import rxdb from 'rxdb'

import { Props as rxDbStateProps } from '../state/RxDb'
import userDbNameFromUserName from './userDbNameFromUserName'
import userDocSchema from '../schemas/userDoc.json'

export default async ({
  rxDbState,
  email,
}: {
  rxDbState: rxDbStateProps
  email: string
}) => {
  const { dbs, syncs } = rxDbState.state
  // create userDoc Collection
  // then sync it
  const userDbName = userDbNameFromUserName(email)
  console.log('createAndSyncUserCollections', { dbs, syncs, rxDbState })
  let userDb
  if (!rxdb.isRxDatabase(dbs[userDbName])) {
    userDb = await rxdb.create({
      name: userDbName,
      adapter: 'idb',
    })
    await userDb.collection({
      name: 'user',
      schema: userDocSchema,
    })
  }
  // await rxDbState.addDb({ name: userDbName, userDb })
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
