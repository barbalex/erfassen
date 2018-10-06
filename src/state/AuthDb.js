import { Container } from 'unstated'
import PouchDB from 'pouchdb-browser'
import pouchdbAuthentication from 'pouchdb-authentication'

import couchUrl from '../utils/couchUrl'

PouchDB.plugin(pouchdbAuthentication)

export default class AuthDbContainer extends Container {
  state = {
    authDb: new PouchDB(couchUrl),
  }

  setAuthDb(authDb) {
    this.setState(state => ({ authDb }))
  }
}
