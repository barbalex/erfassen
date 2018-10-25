import rxdb from 'rxdb'
import pouchdbAdapterHttp from 'pouchdb-adapter-http'
import pouchdbAdapterIdb from 'pouchdb-adapter-idb'

rxdb.plugin(pouchdbAdapterHttp)
rxdb.plugin(pouchdbAdapterIdb)

import getProjectDbName from './getProjectDbName'
import projectDefSchema from '../schemas/projectDef.json'

export default async ({ projectName, authState }) => {
  const { dbs, email: creatorName } = authState.state
  const projectDbName = getProjectDbName({
    creatorName,
    projectName,
  })
  // check if this dbname already exists
  const dbNames = Object.keys(dbs)
  if (dbNames.includes(projectDbName)) {
    throw new Error('Dieser Name wird schon benutzt')
  }

  try {
    await dbs.messages.projectdef.insert({
      projectName,
      creatorName,
      type: 'projectDef',
    })
  } catch (error) {
    throw error
  }

  let projectDb
  try {
    projectDb = await rxdb.create({
      name: projectDbName,
      adapter: 'idb',
    })
  } catch (error) {
    throw error
  }
  const projectDefCollection = await projectDb.collection({
    name: 'projectdef',
    schema: projectDefSchema,
    // force pouch to always include credentials
    // see: https://github.com/pouchdb-community/pouchdb-authentication/issues/239#issuecomment-410489376
    pouchSettings: {
      fetch(url, opts) {
        opts.credentials = 'include'
        return fetch(url, opts)
      },
    },
  })
  authState.addDb({ name: projectDbName, db: projectDb })
  const projectdefSync = await projectDefCollection.sync({
    remote: `http://localhost:5984/${projectDbName}/`,
    options: {
      live: true,
      retry: true,
    },
    query: projectDb.projectdef
      .find()
      .where('type')
      .eq('projectDef'),
  })
  projectdefSync.error$.subscribe(error => console.dir(error))
  projectdefSync.change$.subscribe(change => console.dir(change))
  projectdefSync.docs$.subscribe(docData => console.dir(docData))
  projectdefSync.denied$.subscribe(docData => console.dir(docData))

  authState.addSync({
    name: `${projectDbName}ProjectDef`,
    sync: projectdefSync,
  })

  console.log('NewProject', { projectDefCollection })
  // insert project def into project db
  try {
    await projectDefCollection.insert({
      _id: 'projectDef',
      projectName,
      creatorName,
      type: 'projectDef',
    })
  } catch (error) {
    throw error
  }
  console.log('finished creating new project')
}
