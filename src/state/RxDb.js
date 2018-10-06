import { Container } from 'unstated'

import createRxDb from '../utils/createRxDb'

export default class RxDbContainer extends Container {
  constructor(props) {
    super(props)

    this.state = {
      rxDb: null,
    }

    // create initial state
    createRxDb()
      .then(rxDb => {
        this.setState(state => ({ rxDb }))
      })
      .catch(error => {
        throw error
      })
  }

  setRxDb(rxDb) {
    this.setState(state => ({ rxDb }))
  }
}
