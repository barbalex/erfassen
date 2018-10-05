/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const technDokuTemplate = path.resolve(`src/templates/technDokuTemplate.tsx`)
  const benutzerDokuTemplate = path.resolve(
    `src/templates/benutzerDokuTemplate.tsx`,
  )

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___sort] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              typ
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const { edges } = result.data.allMarkdownRemark
    const benutzerDoku = edges.filter(
      e => e.node.frontmatter.typ === 'benutzerDoku',
    )
    const technDoku = edges.filter(e => e.node.frontmatter.typ === 'technDoku')

    technDoku.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: technDokuTemplate,
        context: {}, // additional data can be passed via context
      })
    })
    benutzerDoku.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: benutzerDokuTemplate,
        context: {},
      })
    })
  })
}
