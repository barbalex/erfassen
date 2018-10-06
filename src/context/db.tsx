import React from 'react'

export const DbContext = React.createContext({ db: null, setDb: () => {} })

// This function takes a component...
export function withDb(Component: any) {
  // ...and returns another component...
  return function DbComponent(props: any) {
    // ... and renders the wrapped component with the context theme!
    // Notice that we pass through any additional props as well

    // bad hack because gatsby destroys db created
    // in onMount method of App in dev mode:
    // db is also set on window
    // and used if db is undefined

    return (
      <DbContext.Consumer>
        {db => <Component {...props} db={db || window.db} />}
      </DbContext.Consumer>
    )
  }
}
