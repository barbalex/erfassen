import { Container } from 'unstated'
import PouchDB from 'pouchdb-browser'
import pouchdbAuthentication from 'pouchdb-authentication'
import get from 'lodash/get'

import couchUrl from '../utils/couchUrl'

PouchDB.plugin(pouchdbAuthentication)

export interface Props {
  authDb: any
  name: string | null
}

export default class AuthDbContainer extends Container<Props> {
  constructor(props: Props) {
    super()
    const authDb = new PouchDB(couchUrl)
    this.state = {
      authDb,
      name: null,
    }
    authDb
      .getSession((resp: any) => {
        const name = get(resp, 'userCtx.name', null)
        if (name) this.setState(state => ({ name }))
      })
      .catch((error: Error) => {
        throw error
      })
  }

  setAuthDb(authDb: any) {
    this.setState(state => ({ authDb }))
  }

  setName(name: string | null) {
    this.setState(state => ({ name }))
  }
}
