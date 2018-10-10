import { Container } from 'unstated'

import createRxDb from '../utils/createRxDb'

interface StateProps {
  rxDb: any
  syncs: Object
}
export interface Props {
  state: StateProps
  setRxDb: (rxDb: any) => void
  setSyncKey: () => void
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
      syncs: {},
    }
    // create initial state
    if (
      (typeof window !== 'undefined' && !window.rxDb) ||
      typeof window === 'undefined'
    ) {
      // as hard as I tried, could not get typescript to type .then correctly
      createRxDb()
        .then(({ rxDb, syncs }) => {
          this.setState(state => ({ rxDb, syncs }))
          console.log({ syncs })
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

  setSyncKey({ key, sync }: { key: string; sync: any }) {
    this.setState(state => ({
      ...state,
      [key]: sync,
    }))
  }
}
