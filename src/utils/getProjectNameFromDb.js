export default ({ creatorName, dbName }) => {
  const firstPartOfName =
    'project_' +
    creatorName
      .toLowerCase()
      .replace('@', '_at_')
      .replace('.', '_p_') +
    '_'
  const projectName = dbName.replace(firstPartOfName, '')
  return projectName
}
