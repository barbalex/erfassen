import React from 'react'

export const AuthDbContext = React.createContext({
  authDb: null,
  setAuthDb: () => {},
})

// This function takes a component...
export function withAuthDb(Component: any) {
  // ...and returns another component...
  return function DbComponent(props: any) {
    // ... and renders the wrapped component with the context theme!
    // Notice that we pass through any additional props as well

    // bad hack because gatsby destroys authDb created
    // in onMount method of App in dev mode:
    // authDb is also set on window
    // and used if authDb is undefined

    return (
      <AuthDbContext.Consumer>
        {authDb => <Component {...props} authDb={authDb || window.authDb} />}
      </AuthDbContext.Consumer>
    )
  }
}
