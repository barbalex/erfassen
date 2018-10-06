import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import teal from '@material-ui/core/colors/teal'
import { Provider as StateProvider } from 'unstated'

import createGlobalStyle from './utils/createGlobalStyle'

const GlobalStyle = createGlobalStyle()
const theme = createMuiTheme({
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
