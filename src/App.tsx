import React, { Component } from 'react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withLifecycle from '@hocs/with-lifecycle'
import { createGlobalStyle } from 'styled-components'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import teal from '@material-ui/core/colors/teal'
import PouchDB from 'pouchdb'
import pouchdbAuthentication from 'pouchdb-authentication'

import { DbContext } from './context/db'
import { AuthDbContext } from './context/authDb'
import createDb from './utils/createDb'
import couchUrl from './utils/couchUrl'

PouchDB.plugin(pouchdbAuthentication)

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
    primary: { main: teal[800] },
    error: {
      main: red[800],
    },
  },
})

declare global {
  interface Window {
    db: any
  }
}

const enhance = compose(
  withState('db', 'setDb', null),
  withState('authDb', 'setAuthDb', null),
  withLifecycle({
    async onDidMount({
      setDb,
      setAuthDb,
    }: {
      setDb: (db: any) => void
      setAuthDb: (authDb: any) => void
    }) {
      if (window.db) return
      let db
      try {
        db = await createDb()
      } catch (error) {
        throw error
      }
      setDb(db)
      // bad hack because gatsby destroys db created
      // in onMount method of App in dev mode:
      // db is also set on window
      // and used if db is undefined
      window.db = db
      // now to the auth db
      const authDb = new PouchDB(couchUrl)
      setAuthDb(authDb)
    },
  }),
)

const App = ({
  db,
  authDb,
  element,
}: {
  db: any
  authDb: any
  element: Component
}) => (
  <DbContext.Provider value={db}>
    <AuthDbContext.Provider value={authDb}>
      <MuiThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          {element}
        </>
      </MuiThemeProvider>
    </AuthDbContext.Provider>
  </DbContext.Provider>
)

export default enhance(App)
