import React, { Component } from 'react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withLifecycle from '@hocs/with-lifecycle'
import { createGlobalStyle } from 'styled-components'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import teal from '@material-ui/core/colors/teal'
import { Provider as StateProvider } from 'unstated'

import { DbContext } from './context/db'
import createDb from './utils/createDb'
import couchUrl from './utils/couchUrl'

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
  withLifecycle({
    async onDidMount({ setDb }: { setDb: (db: any) => void }) {
      if (window.db) return
      let db
      try {
        db = await createDb()
      } catch (error) {
        throw error
      }
      setDb(db)
    },
  }),
)

const App = ({ db, element }: { db: any; element }) => (
  <DbContext.Provider value={db}>
    <StateProvider>
      <MuiThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          {element}
        </>
      </MuiThemeProvider>
    </StateProvider>
  </DbContext.Provider>
)

export default enhance(App)
