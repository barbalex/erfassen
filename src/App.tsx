import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import teal from '@material-ui/core/colors/teal'
import { Provider as StateProvider } from 'unstated'
import 'isomorphic-fetch'
import PouchDB from 'pouchdb-browser'

import createGlobalStyle from './utils/createGlobalStyle'

// force pouch to always include credentials
// see: https://github.com/pouchdb-community/pouchdb-authentication/issues/239#issuecomment-410489376
PouchDB.defaults({
  fetch(url: any, opts: any) {
    opts.credentials = 'include'
    return (PouchDB as any).fetch(url, opts)
  },
} as PouchDB.Configuration.RemoteDatabaseConfiguration)

const GlobalStyle = createGlobalStyle()
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'light',
    primary: { main: teal[800] },
    error: {
      main: red[800],
    },
  },
})

const App = ({ element }: { element: any }) => (
  <StateProvider>
    <MuiThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {element}
      </>
    </MuiThemeProvider>
  </StateProvider>
)

export default App
