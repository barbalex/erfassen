/**
 * inspired from:
 * https://www.reddit.com/r/reactjs/comments/8t3di7/how_do_you_access_your_store_in_lifecycle/
 * example: https://github.com/jaredpalmer/react-fns/blob/052ea56092c53946c7937e1d32adf78a7d37d6f3/src/GeoPosition/withGeoPosition.tsx
 */
import React from 'react'
import { Subscribe } from 'unstated'

import RxDbState from './RxDb'

export default function withRxDbState(WrappedComponent) {
  return props => (
    <Subscribe to={[RxDbState]}>
      {value => <WrappedComponent rxDbState={value} {...props} />}
    </Subscribe>
  )
}
