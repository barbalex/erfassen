import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import orange from '@material-ui/core/colors/orange'

import Header from './header'

const GlobalStyle = createGlobalStyle`
  html {
    overflow: auto;
  }
`

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { main: '#2e7d32' },
    error: {
      main: red[500],
    },
  },
  background: {
    default: orange[50],
  },
})

interface Props {
  children: JSX.Element[] | JSX.Element
}

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
        <GlobalStyle />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <MuiThemeProvider theme={theme}>
          <>
            <Header />
            {children}
          </>
        </MuiThemeProvider>
      </>
    )}
  />
)

export default Layout
