import React, { Fragment } from 'react'
import { graphql, navigate } from 'gatsby'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

import Layout from '../components/Layout'
import TechnDokuMenuItem from './TechnDokuMenuItem'

const Container = styled.div`
  margin-top: 64px;
  height: calc(100vh - 64px);
  display: flex;
`
const Menu = styled.div`
  width: 25%;
  min-width: 320px;
  height: calc(100vh - 64px);
  overflow-y: auto;
  padding: 25px 0;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`
const Doku = styled.div`
  width: 100%;
  padding: 25px;
  overflow-y: auto;
  ul {
    margin-top: 0;
  }
  p,
  li {
    margin-bottom: 0;
  }
  h1,
  h3,
  ol {
    margin-bottom: 10px;
  }
  h2 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`
const MenuTitle = styled.h3`
  padding: 0 24px;
  margin-bottom: 14px;
`
const DokuDate = styled.p`
  margin-bottom: 15px !important;
  color: grey;
`

const Template = ({ data }: { data: any }) => {
  const { markdownRemark, allMarkdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { edges: posts } = allMarkdownRemark

  return (
    <Layout>
      <Container>
        <Menu>
          <MenuTitle>Technische Dokumentation</MenuTitle>
          <List component="nav">
            <Divider />
            {posts.map(({ node: post }: { node: any }, index: number) => (
              <TechnDokuMenuItem post={post} key={post.id} />
            ))}
          </List>
        </Menu>
        <Doku>
          <h1>{frontmatter.title}</h1>
          <DokuDate>{frontmatter.date}</DokuDate>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Doku>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        path
        title
      }
    }
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___sort] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            path
          }
        }
      }
    }
  }
`

export default Template
