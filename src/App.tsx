import React, { Component } from 'react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withLifecycle from '@hocs/with-lifecycle'

import { DbContext } from './context/db'
import createDb from './utils/createDb'

const enhance = compose(
  withState('db', 'setDb', null),
  withLifecycle({
    async onDidMount({ setDb }: { setDb: (db: any) => void }) {
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

const App = ({ db, element }: { db: any; element: Component }) => (
  <DbContext.Provider value={db}>{element}</DbContext.Provider>
)

export default enhance(App)
