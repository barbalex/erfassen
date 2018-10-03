import React, { Component } from 'react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withLifecycle from '@hocs/with-lifecycle'

import { DbContext } from './context/db'
import createDb from './utils/createDb'

const enhance = compose(
  withState('db', 'setDb', null),
  withLifecycle({
    onDidMount({ setDb }: { setDb: (db: any) => void }) {
      createDb().then((db: any) => setDb(db))
    },
  }),
)

const App = ({ db, element }: { db: any; element: Component }) => (
  <DbContext.Provider value={db}>{element}</DbContext.Provider>
)

export default enhance(App)
