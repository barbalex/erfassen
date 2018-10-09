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
  const { rxDb } = rxDbState.state
  // create userDoc Collection
  // then sync it
  const userDbName = userDbNameFromUserName(email)
  await rxDb.collection({
    name: userDbName,
    schema: userDocSchema,
  })
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
  console.log('Signup', { rxDb, userDbName })
}
