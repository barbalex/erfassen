import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import teal from '@material-ui/core/colors/teal'

import Header from './Header'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { main: teal[500] },
    error: {
      main: red[500],
    },
  },
})

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout: React.SFC<{}> = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
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
