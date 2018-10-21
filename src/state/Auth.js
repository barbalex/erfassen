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

export default class AuthContainer extends Container {
  constructor() {
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
      .then(resp => {
        const name = get(resp, 'userCtx.name', null)
        if (name) {
          this.setState({ name })
          createAndSyncUserCollection({ email: name, authState: this })
          // create initial dbs state
          if (
            (typeof window !== 'undefined' && !window.dbs) ||
            typeof window === 'undefined'
          ) {
            createRxDb(this).catch(error => {
              throw error
            })
          }
        }
      })
      .catch(error => {
        throw error
      })
  }

  setAuthDb = authDb => {
    this.setState({ authDb })
  }

  setName = name => {
    this.setState({ name })
  }

  setSignupOpen = signupOpen => {
    this.setState({ signupOpen })
  }

  setLoginOpen = loginOpen => {
    this.setState({ loginOpen })
  }

  signUp = async ({ email, password }) => {
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

  logIn = async ({ email, password }) => {
    // first logout
    try {
      await this.logOut()
    } catch (error) {
      console.log('Auth, logIn: Error logging out:', error)
    }

    let logInResponce
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
    this.setState({
      name: logInResponce.name,
      loginOpen: false,
      authDb: new PouchDB(couchUrl()),
    })
    createAndSyncUserCollection({ email, authState: this })
    createRxDb(this).catch(error => {
      throw error
    })
  }

  logOut = async () => {
    try {
      await this.state.authDb.logOut()
    } catch (error) {
      throw error
    }
    const { dbs, syncs } = this.state
    // remove all dbs
    Object.values(dbs).forEach(db => db.remove())
    // stop all syncing
    Object.values(syncs).forEach(sync => sync.cancel())
    this.setState({
      name: null,
      loginOpen: false,
      dbs: null,
      syncs: {},
    })
    return
  }

  setDbs = dbs => {
    this.setState({ dbs })
  }

  addDb = ({ name, db }) => {
    //console.log('Auth, addDb', { name, db, dbs: this.state.dbs })
    this.setState(state => {
      console.log('Auth, addDb', { dbs: state.dbs })
      const newDbs = {
        ...state.dbs,
        [name]: db,
      }
      console.log('Auth, addDb', { newDbs })
      window.dbs = newDbs
      return {
        dbs: newDbs,
      }
    })
  }

  setSyncs = syncs => {
    this.setState({ syncs })
  }

  addSync = ({ name, sync }) => {
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
