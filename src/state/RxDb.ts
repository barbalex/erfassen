import { Container } from 'unstated'

import createRxDb from '../utils/createRxDb'

interface StateProps {
  rxDb: any
}
export interface Props {
  state: StateProps
  setRxDb: (rxDb: any) => void
}
declare global {
  interface Window {
    rxDb: any
  }
}

/**
 * window.rxDb is a hack
 * state gets lost in live update in gatsby
 * so need to set it on window and fetch it from there
 * to enable nice dev experience
 */
export default class RxDbContainer extends Container<StateProps> {
  constructor(props: StateProps) {
    super()
    const rxDb = typeof window === 'undefined' ? null : window.rxDb || null
    this.state = {
      rxDb,
    }
    // create initial state
    if (
      (typeof window !== 'undefined' && !window.rxDb) ||
      typeof window === 'undefined'
    ) {
      createRxDb()
        .then((rxDb: any) => {
          this.setState(state => ({ rxDb }))
          if (typeof window !== 'undefined') window.rxDb = rxDb
        })
        .catch(error => {
          throw error
        })
    }
  }

  setRxDb(rxDb: any) {
    this.setState(state => ({ rxDb }))
  }
}
