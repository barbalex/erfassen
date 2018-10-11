import { Container } from 'unstated'

import createRxDb from '../utils/createRxDb'

interface StateProps {
  dbs: any
  syncs: Object
}
export interface Props {
  state: StateProps
  addDb: () => void
  addSync: () => void
}
declare global {
  interface Window {
    dbs: any
  }
}

/**
 * window.dbs is a hack
 * state gets lost in live update in gatsby
 * so need to set it on window and fetch it from there
 * to enable nice dev experience
 */
export default class RxDbContainer extends Container<StateProps> {
  constructor(props: StateProps) {
    super()
    const dbs = typeof window === 'undefined' ? null : window.dbs || null
    this.state = {
      dbs,
      syncs: {},
    }
    // create initial state
    if (
      (typeof window !== 'undefined' && !window.dbs) ||
      typeof window === 'undefined'
    ) {
      // as hard as I tried, could not get typescript to type .then correctly
      createRxDb()
        .then(({ dbs, syncs }) => {
          this.setState(state => ({ dbs, syncs }))
          console.log({ syncs })
          if (typeof window !== 'undefined') window.dbs = dbs
        })
        .catch(error => {
          throw error
        })
    }
  }

  addDb = ({ name, db }: { name: string; db: any }) => {
    console.log('RxDb, addDb', { name, db, dbs: this.state.dbs })
    this.setState(state => {
      const newDbs = {
        ...state.dbs,
        [name]: db,
      }
      console.log('RxDb, addDb', { newDbs })
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
