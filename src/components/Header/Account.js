import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { FaUserCircle as UserIcon } from 'react-icons/fa'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'
import styled from 'styled-components'

import Signup from './Signup'
import Login from './Login'
import ErrorBoundary from '../ErrorBoundary'
import withAuthState from '../../state/withAuth'

const IconContainer = styled.div`
  position: relative;
  padding-left: 10px;
`
const UserNameDiv = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 10px;
  width: 60px;
  left: 5px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  /* ensure cursor is not changed */
  z-index: -1;
`

const enhance = compose(
  withAuthState,
  withState('anchorEl', 'setAnchorEl', null),
  withHandlers({
    onClickMenu: ({ setAnchorEl }) => event => setAnchorEl(event.currentTarget),
    onCloseMenu: ({ setAnchorEl }) => () => setAnchorEl(null),
    onClickSignup: ({ setAnchorEl, authState }) => () => {
      setAnchorEl(null)
      authState.setSignupOpen(!authState.state.signupOpen)
    },
    onClickLogin: ({ setAnchorEl, authState }) => () => {
      setAnchorEl(null)
      authState.setLoginOpen(!authState.state.loginOpen)
    },
    onClickLogout: ({ setAnchorEl, authState }) => () => {
      setAnchorEl(null)
      authState.logOut()
    },
  }),
)

const Account = ({
  anchorEl,
  onCloseMenu,
  onClickMenu,
  onClickSignup,
  onClickLogout,
  onClickLogin,
  authState,
}) => {
  const { name, signupOpen, loginOpen } = authState.state

  return (
    <ErrorBoundary>
      <>
        <IconContainer>
          <IconButton
            aria-haspopup="true"
            aria-label="Konto"
            onClick={onClickMenu}
            color="inherit"
            title="Konto"
          >
            <UserIcon />
          </IconButton>
          <UserNameDiv>{name || ''}</UserNameDiv>
        </IconContainer>
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
          {!name && <MenuItem onClick={onClickLogin}>Anmelden</MenuItem>}
          {name && <MenuItem onClick={onClickLogout}>Abmelden</MenuItem>}
          <MenuItem onClick={onClickSignup}>Konto erstellen</MenuItem>
        </Menu>
        {signupOpen && <Signup />}
        {loginOpen && <Login />}
      </>
    </ErrorBoundary>
  )
}

export default enhance(Account)