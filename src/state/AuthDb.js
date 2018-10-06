import { Container } from 'unstated'

class AuthDbContainer extends Container {
  state = {
    authDb: null,
  }

  setAuthDb(authDb) {
    console.log('authDb, authDb passed in:', authDb)
    console.log('authDb, this:', this)
    this.setState(state => ({ authDb }))
  }
}

export default AuthDbContainer
