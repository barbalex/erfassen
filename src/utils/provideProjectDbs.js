import difference from 'lodash/difference'

import createProjectDb from './createProjectDb'
import getProjectNameFromDb from './getProjectNameFromDb'

// TODO
// check existing dbs
// add only missing ones
// remove existing ones not in projects list

export default ({ projects: usersProjects, authState }) => {
  const { dbs, email } = authState.state
  if (!dbs) return console.log('provideProjectDbs: no dbs found')
  const existingProjects = Object.keys(dbs)
    // eslint-disable-next-line no-unused-vars
    .filter(name => name.startsWith('project_'))
    .map(name => getProjectNameFromDb({ creatorName: email, dbName: name }))
  const projectsToAdd = difference(usersProjects, existingProjects)
  const projectsToRemove = difference(existingProjects, usersProjects)
  console.log('provideProjectDbs', {
    existingProjects,
    usersProjects,
    projectsToAdd,
    projectsToRemove,
  })
  for (let projectName of projectsToAdd) {
    createProjectDb({ projectName, authState })
  }
}
