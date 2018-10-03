import React, { Component } from 'react'

export const DbContext = React.createContext({ db: null, setDb: () => {} })

// This function takes a component...
export function withDb(PassedComponent: Component) {
  // ...and returns another component...
  return function DbComponent(props: any) {
    // ... and renders the wrapped component with the context theme!
    // Notice that we pass through any additional props as well
    return (
      <DbContext.Consumer>
        {db => <PassedComponent {...props} db={db} />}
      </DbContext.Consumer>
    )
  }
}
