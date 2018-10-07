import { Container } from 'unstated'
/**
 * somehow gatsby manages to sometimes (not always)
 * drag this file through node which makes
 * pouchdb-browser complain fetch is missing
 * using pouchdb is no solution because that complains
 * to miss many bindings
 */
import 'isomorphic-fetch'
import PouchDB from 'pouchdb-browser'
import pouchdbAuthentication from 'pouchdb-authentication'
import get from 'lodash/get'

import couchUrl from '../utils/couchUrl'

PouchDB.plugin(pouchdbAuthentication)

interface StateProps {
  authDb: any
  name: string | null
  signupOpen: boolean
  loginOpen: boolean
}
export interface Props {
  state: StateProps
  setAuthDb: (authDb: any) => void
  setName: (name: string | null) => void
  setSignupOpen: (signupOpen: boolean) => void
  setLoginOpen: (loginOpen: boolean) => void
}

export default class AuthDbContainer extends Container<StateProps> {
  constructor(props: StateProps) {
    super()
    const authDb = new PouchDB(couchUrl())
    this.state = {
      authDb,
      name: null,
      signupOpen: false,
      loginOpen: false,
    }

    authDb
      .getSession()
      .then((resp: any) => {
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

  setSignupOpen(signupOpen: boolean) {
    this.setState(state => ({ signupOpen }))
  }

  setLoginOpen(loginOpen: boolean) {
    this.setState(state => ({ loginOpen }))
  }
}
