import { Container } from 'unstated'
import PouchDB from 'pouchdb-browser'
import pouchdbAuthentication from 'pouchdb-authentication'

import couchUrl from '../utils/couchUrl'

PouchDB.plugin(pouchdbAuthentication)

interface Props {
  authDb: any
}

export default class AuthDbContainer extends Container<Props> {
  state = {
    authDb: new PouchDB(couchUrl),
  }

  setAuthDb(authDb: any) {
    this.setState(state => ({ authDb }))
  }
}
