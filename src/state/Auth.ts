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
import createAndSyncUserCollection from '../utils/createAndSyncUserCollection'
import { Props as rxDbStateProps } from './RxDb'

PouchDB.plugin(pouchdbAuthentication)

interface LogInProps {
  email: string
  password: string
  rxDbState: rxDbStateProps
}

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
  logIn: () => void
  logOut: () => void
}

export default class AuthContainer extends Container<StateProps> {
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
        if (name) {
          this.setState(state => ({ name }))
          // TODO: createAndSyncUserCollection
        }
      })
      .catch((error: Error) => {
        throw error
      })
  }

  setAuthDb = (authDb: any) => {
    this.setState(state => ({ authDb }))
  }

  setName = (name: string | null) => {
    this.setState(state => ({ name }))
  }

  setSignupOpen = (signupOpen: boolean) => {
    this.setState(state => ({ signupOpen }))
  }

  setLoginOpen = (loginOpen: boolean) => {
    this.setState(state => ({ loginOpen }))
  }

  logIn = async ({ email, password }: LogInProps) => {
    let logInResponce: any
    try {
      logInResponce = await this.state.authDb.logIn(email, password)
    } catch (error) {
      if (error.name === 'unauthorized' || error.name === 'forbidden') {
        // name or password incorrect
        throw new Error('Name oder Passwort stimmt nicht')
      } else {
        // cosmic rays, a meteor, etc.
        throw error
      }
    }
    console.log('Auth, logIn: logInResponce logging in:', logInResponce)
    this.setState(state => ({
      name: logInResponce.name,
      loginOpen: false,
      authDb: new PouchDB(couchUrl()),
    }))
    // TODO: need to reset dbs and syncs first, to remove all traces of previous users?
    createAndSyncUserCollection({ email })
  }

  logOut = async () => {
    try {
      await this.state.authDb.logOut()
    } catch (error) {
      throw error
    }
    this.setState(state => ({ name: null, loginOpen: false }))
    // TODO: remove user collection, stop syncing
  }
}
