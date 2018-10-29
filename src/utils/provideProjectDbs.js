import difference from 'lodash/difference'

import createProjectDb from './createProjectDb'

// TODO
// check existing dbs
// add only missing ones
// remove existing ones not in projects list

export default ({ projects: usersProjects, authState }) => {
  const { dbs } = authState.state
  if (!dbs) return console.log('provideProjectDbs: no dbs found')
  const existingProjects = Object.keys(dbs).filter(name =>
    name.startsWith('project_'),
  )
  const projectsToAdd = difference(usersProjects, existingProjects)
  const projectsToRemove = difference(existingProjects, usersProjects)
  console.log('provideProjectDbs', {
    existingProjects,
    usersProjects,
    projectsToAdd,
    projectsToRemove,
  })
  for (let projectName of projectsToAdd) {
    createProjectDb({
      projectName,
      authState,
    })
  }
}
