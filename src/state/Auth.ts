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

import createRxDb from '../utils/createRxDb'
import couchUrl from '../utils/couchUrl'
import createAndSyncUserCollection from '../utils/createAndSyncUserCollection'

PouchDB.plugin(pouchdbAuthentication)

interface LogInProps {
  email: string
  password: string
}

interface StateProps {
  authDb: any
  name: string | null
  signupOpen: boolean
  loginOpen: boolean
  dbs: any
  syncs: Object
}
export interface Props {
  state: StateProps
  setAuthDb: (authDb: any) => void
  setName: (name: string | null) => void
  setSignupOpen: (signupOpen: boolean) => void
  setLoginOpen: (loginOpen: boolean) => void
  signUp: () => void
  logIn: () => void
  logOut: () => void
  setDbs: (dbs: any) => void
  addDb: () => void
  setSyncs: (syncs: Object) => void
  addSync: () => void
}
declare global {
  interface Window {
    dbs: any
  }
}

export default class AuthContainer extends Container<StateProps> {
  constructor(props: StateProps) {
    super()
    const authDb = new PouchDB(couchUrl())
    const dbs = typeof window === 'undefined' ? null : window.dbs || null
    this.state = {
      authDb,
      name: null,
      signupOpen: false,
      loginOpen: false,
      dbs,
      syncs: {},
    }

    authDb
      .getSession()
      .then((resp: any) => {
        const name = get(resp, 'userCtx.name', null)
        if (name) {
          this.setState(state => ({ name }))
          createAndSyncUserCollection({ email: name, authState: this })
          // create initial dbs state
          if (
            (typeof window !== 'undefined' && !window.dbs) ||
            typeof window === 'undefined'
          ) {
            // as hard as I tried, could not get typescript to type .then correctly
            createRxDb(this).catch((error: Error) => {
              throw error
            })
          }
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

  signUp = async ({ email, password }: LogInProps) => {
    // first logout
    try {
      await this.logOut()
    } catch (error) {
      console.log('Auth, signUp: Error logging out:', error)
    }

    try {
      await this.state.authDb.signUp(email, password)
    } catch (error) {
      console.log('Signup: error logging in:', error)
    }
    this.setSignupOpen(false)
    // log in
    try {
      await this.logIn({ email, password })
    } catch (error) {
      throw error
    }
  }

  logIn = async ({ email, password }: LogInProps) => {
    // first logout
    try {
      await this.logOut()
    } catch (error) {
      console.log('Auth, logIn: Error logging out:', error)
    }

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
    //console.log('Auth, logIn: logInResponce logging in:', logInResponce)
    this.setState(state => ({
      name: logInResponce.name,
      loginOpen: false,
      authDb: new PouchDB(couchUrl()),
    }))
    createAndSyncUserCollection({ email, authState: this })
  }

  logOut = async () => {
    try {
      await this.state.authDb.logOut()
    } catch (error) {
      throw error
    }
    const { dbs, syncs } = this.state
    // remove all dbs
    Object.values(dbs).forEach((db: any) => db.remove())
    // stop all syncing
    Object.values(syncs).forEach((sync: any) => sync.cancel())
    this.setState(state => ({
      name: null,
      loginOpen: false,
      dbs: null,
      syncs: {},
    }))
    return
  }

  setDbs = (dbs: any) => {
    this.setState(state => ({ dbs }))
  }

  addDb = ({ name, db }: { name: string; db: any }) => {
    //console.log('Auth, addDb', { name, db, dbs: this.state.dbs })
    this.setState(state => {
      const newDbs = {
        ...state.dbs,
        [name]: db,
      }
      //console.log('Auth, addDb', { newDbs })
      window.dbs = newDbs
      return {
        dbs: newDbs,
      }
    })
  }

  setSyncs = (syncs: Object) => {
    this.setState(state => ({ syncs }))
  }

  addSync = ({ name, sync }: { name: string; sync: any }) => {
    this.setState(state => {
      const newSyncs = {
        ...state.syncs,
        [name]: sync,
      }
      return {
        dbs: state.dbs,
        syncs: newSyncs,
      }
    })
  }
}
