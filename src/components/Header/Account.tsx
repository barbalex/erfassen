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
import withAuthDbState from '../../state/withAuthDb'
import { Props as authDbStateProps } from '../../state/AuthDb'

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
`

interface Props {
  anchorEl: EventTarget | null
  setAnchorEl: (anchorEl: EventTarget | null) => void
  onClickMenu: (event: Event) => void
  onCloseMenu: (event: Event) => void
  signupOpen: boolean
  setSignupOpen: (signupOpen: boolean) => void
  onClickSignup: (signupOpen: boolean) => void
  loginOpen: boolean
  setLoginOpen: (signupOpen: boolean) => void
  onClickLognin: (signupOpen: boolean) => void
  authDbState: authDbStateProps
}

const enhance = compose(
  withAuthDbState,
  withState('anchorEl', 'setAnchorEl', null),
  withState('signupOpen', 'setSignupOpen', false),
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
    onClickSignup: ({
      setSignupOpen,
      signupOpen,
      setAnchorEl,
    }: {
      signupOpen: boolean
      setSignupOpen: (signupOpen: boolean) => void
      setAnchorEl: (anchorEl: EventTarget | null) => void
    }) => () => {
      setAnchorEl(null)
      setSignupOpen(!signupOpen)
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
  signupOpen,
  loginOpen,
  onClickSignup,
  onClickLogin,
  setSignupOpen,
  setLoginOpen,
  authDbState,
}) => {
  console.log('Account, name:', authDbState.state.name)
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
          <UserNameDiv>{authDbState.state.name || ''}</UserNameDiv>
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
          <MenuItem onClick={onClickLogin}>Anmelden</MenuItem>
          <MenuItem onClick={onClickSignup}>Konto erstellen</MenuItem>
        </Menu>
        {signupOpen && (
          <Signup open={signupOpen} setSignupOpen={setSignupOpen} />
        )}
        {loginOpen && <Login open={loginOpen} setLoginOpen={setLoginOpen} />}
      </>
    </ErrorBoundary>
  )
}

export default enhance(Account)
