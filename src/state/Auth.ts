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
import { Props as rxDbStateProps } from './RxDb'

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
  logIn: () => void
  logOut: () => void
  addDb: () => void
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
          // TODO: createAndSyncUserCollection
        }
      })
      .catch((error: Error) => {
        throw error
      })

    // create initial dbs state
    if (
      (typeof window !== 'undefined' && !window.dbs) ||
      typeof window === 'undefined'
    ) {
      // as hard as I tried, could not get typescript to type .then correctly
      createRxDb()
        .then(({ dbs, syncs }) => {
          this.setState(state => ({ dbs, syncs }))
          if (typeof window !== 'undefined') window.dbs = dbs
        })
        .catch(error => {
          throw error
        })
    }
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
    // remove all dbs
    Object.keys(this.state.dbs).forEach((db: any) => db.remove())
    // stop all syncing
    Object.keys(this.state.syncs).forEach((sync: any) => sync.cancel())
    this.setState(state => ({
      name: null,
      loginOpen: false,
      dbs: null,
      syncs: {},
    }))
  }

  addDb = ({ name, db }: { name: string; db: any }) => {
    console.log('RxDb, addDb', { name, db, dbs: this.state.dbs })
    this.setState(state => {
      const newDbs = {
        ...state.dbs,
        [name]: db,
      }
      console.log('RxDb, addDb', { newDbs })
      window.dbs = newDbs
      return {
        dbs: newDbs,
        //syncs: state.syncs,
      }
    })
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
