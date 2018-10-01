import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import teal from '@material-ui/core/colors/teal'

import Header from './header'

const GlobalStyle = createGlobalStyle`
  html {
    overflow: hidden;
  }

/* scrollbars */

::-webkit-scrollbar {
  width: 12px;
  background: rgba(255, 253, 231, 0.1);
}

::-webkit-scrollbar:horizontal {
  height: 12px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.4);
}

::-webkit-scrollbar-thumb {
  border-radius: 2px;
  -webkit-box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.5);
  background: rgba(85, 85, 85, 0.05);
}

::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0);
}
  

/*
 * seems that overflow:hidden is necessary
 * for all relfex-elements
 * BUT: map is not shown with it...
 */

.reflex-element:not(.karte) {
  border-right: 0 !important;
  border-left: 0 !important;
}

/*
.reflex-element:not(.karte) > div {
  overflow: hidden;
}*/

.reflex-splitter {
  background-color: #fffde7 !important;
  border-right: 1px solid #fffde7 !important;
  border-left: 1px solid #fffde7 !important;
}

.reflex-splitter:hover {
  background-color: #fff59d !important;
  border-right: 1px solid #fff59d !important;
  border-left: 1px solid #fff59d !important;
}
`

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { main: teal[500] },
    error: {
      main: red[500],
    },
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
