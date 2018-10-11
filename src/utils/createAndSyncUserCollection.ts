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
      name: userDbName,
      schema: userDocSchema,
    })
  }
  const isAlreadyBeingSynced: boolean = !!syncs && !!syncs[userDbName]
  let sync
  if (!isAlreadyBeingSynced) {
    sync = userDb.sync({
      remote: `http://localhost:5984/${userDbName}/`,
      options: {
        live: true,
        retry: true,
      },
      query: userDb
        .find()
        .where('type')
        .eq('user'),
    })
  }
  rxDbState.addDb({ name: userDbName, userDb })
  rxDbState.addSync({ name: userDbName, sync })
  console.log('Signup', { dbs, userDbName })
}
