import { Props as authStateProps } from '../state/Auth'
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
  const { rxDb, syncs } = rxDbState.state
  // create userDoc Collection
  // then sync it
  const userDbName = userDbNameFromUserName(email)
  if (!rxDb.isRxDatabase(rxDb[userDbName])) {
    await rxDb.collection({
      name: userDbName,
      schema: userDocSchema,
    })
  }
  // TODO: how to know if is already being synced?
  // set sync key in rxdb's sync state
  const isAlreadyBeingSynced: boolean = !!syncs[userDbName]
  if (!isAlreadyBeingSynced) {
    rxDb[userDbName].sync({
      remote: `http://localhost:5984/${userDbName}/`,
      options: {
        live: true,
        retry: true,
      },
      query: rxDb[userDbName]
        .find()
        .where('type')
        .eq('user'),
    })
  }
  console.log('Signup', { rxDb, userDbName })
}
