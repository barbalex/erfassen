import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'

import Layout from '../../components/Layout'
import TechnDokuMenuItem from './MenuItem'

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
const MenuTitle = styled.div`
  padding: 0 24px;
  margin-bottom: 14px;
`
const MenuTitleLink = styled(Link)`
  font-size: 21px;
  font-weight: 700;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  &:hover {
    text-decoration: underline;
  }
`
const DokuDate = styled.p`
  margin-bottom: 15px !important;
  color: grey;
`

const Template = ({ data }: { data: any }) => {
  const { allMarkdownRemark } = data
  const { edges: posts } = allMarkdownRemark

  return (
    <Layout>
      <Container>
        <Menu>
          <MenuTitle>
            <MenuTitleLink to="/Technische-Dokumentation/">
              Technische Dokumentation
            </MenuTitleLink>
          </MenuTitle>
          <List component="nav">
            <Divider />
            {posts.map(({ node: post }: { node: any }, index: number) => (
              <TechnDokuMenuItem post={post} key={post.id} />
            ))}
          </List>
        </Menu>
        <Doku>
          <p>Hier informieren wir, wie erfassen.ch funktioniert</p>
        </Doku>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
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
