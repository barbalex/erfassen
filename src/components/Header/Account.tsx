import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { FaUserCircle as UserIcon } from 'react-icons/fa'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'

import Signin from './Signin'
import Login from './Login'
import ErrorBoundary from '../ErrorBoundary'

interface Props {
  anchorEl: EventTarget | null
  setAnchorEl: (anchorEl: EventTarget | null) => void
  onClickMenu: (event: Event) => void
  onCloseMenu: (event: Event) => void
  signinOpen: boolean
  setSigninOpen: (signinOpen: boolean) => void
  onClickSignin: (signinOpen: boolean) => void
  loginOpen: boolean
  setLoginOpen: (signinOpen: boolean) => void
  onClickLognin: (signinOpen: boolean) => void
}

const enhance = compose(
  withState('anchorEl', 'setAnchorEl', null),
  withState('signinOpen', 'setSigninOpen', false),
  withState('loginOpen', 'setLoginOpen', false),
  withHandlers<any, any>({
    onClickMenu: ({
      setAnchorEl,
    }: {
      setAnchorEl: (anchorEl: EventTarget | null) => void
    }) => (event: Event) => setAnchorEl(event.currentTarget),
    onCloseMenu: ({
      setAnchorEl,
    }: {
      setAnchorEl: (anchorEl: EventTarget | null) => void
    }) => () => setAnchorEl(null),
    onClickSignin: ({
      setSigninOpen,
      signinOpen,
      setAnchorEl,
    }: {
      signinOpen: boolean
      setSigninOpen: (signinOpen: boolean) => void
      setAnchorEl: (anchorEl: EventTarget | null) => void
    }) => () => {
      setAnchorEl(null)
      setSigninOpen(!signinOpen)
    },
    onClickLogin: ({
      setLoginOpen,
      loginOpen,
      setAnchorEl,
    }: {
      loginOpen: boolean
      setLoginOpen: (loginOpen: boolean) => void
      setAnchorEl: (anchorEl: EventTarget | null) => void
    }) => () => {
      setAnchorEl(null)
      setLoginOpen(!loginOpen)
    },
  }),
)

const Account: React.SFC<Props> = ({
  anchorEl,
  onCloseMenu,
  onClickMenu,
  signinOpen,
  loginOpen,
  onClickSignin,
  onClickLogin,
  setSigninOpen,
  setLoginOpen,
}) => (
  <ErrorBoundary>
    <>
      <IconButton
        aria-haspopup="true"
        aria-label="Konto"
        onClick={onClickMenu}
        color="inherit"
        title="Konto"
      >
        <UserIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={!!anchorEl}
        onClose={onCloseMenu}
      >
        <MenuItem onClick={onClickLogin}>Anmelden</MenuItem>
        <MenuItem onClick={onClickSignin}>Konto erstellen</MenuItem>
      </Menu>
      <Signin open={signinOpen} setSigninOpen={setSigninOpen} />
      <Login open={loginOpen} setLoginOpen={setLoginOpen} />
    </>
  </ErrorBoundary>
)

export default enhance(Account)
