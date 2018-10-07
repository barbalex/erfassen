// @flow
import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import IconButton from '@material-ui/core/IconButton'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'

import ErrorBoundary from '../ErrorBoundary'
import withAuthState from '../../state/withAuth'
import { Props as authStateProps } from '../../state/Auth'

const StyledDialog = styled(Dialog)``
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`
const StyledInput = styled(Input)`
  &:before {
    border-bottom-color: rgba(0, 0, 0, 0.1) !important;
  }
`

const enhance = compose(
  withAuthState,
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withState('showPass', 'setShowPass', false),
  withState('emailErrorText', 'setEmailErrorText', ''),
  withState('passwordErrorText', 'setPasswordErrorText', ''),
  withHandlers<any, any>({
    close: ({ authState }: { authState: authStateProps }) => () =>
      authState.setLoginOpen(false),
    onClickLogin: ({
      email,
      password,
      authState,
    }: {
      email: string
      password: string
      authState: authStateProps
    }) => async () => {
      const { setName, setLoginOpen, state } = authState
      let logInResponce
      try {
        logInResponce = await state.authDb.logIn(email, password)
      } catch (error) {
        if (error.name === 'unauthorized' || error.name === 'forbidden') {
          // name or password incorrect
        } else {
          // cosmic rays, a meteor, etc.
        }
        console.log('Login: error logging in:', error)
        throw error
      }
      console.log('Login: logInResponce logging in:', logInResponce)
      setName(email)
      setLoginOpen(false)
    },
    onToggleShowPass: ({
      showPass,
      setShowPass,
    }: {
      showPass: boolean
      setShowPass: (showPass: boolean) => void
    }) => () => {
      setShowPass(!showPass)
    },
  }),
  withHandlers<any, any>({
    onBlurEmail: ({ setEmail }: { setEmail: (email: string) => void }) => (
      event: Event,
    ) => setEmail(event.target.value),
    onBlurPassword: ({
      setPassword,
    }: {
      setPassword: (password: string) => void
    }) => (event: Event) => setPassword(event.target.value),
  }),
)

const Login = ({
  email,
  password,
  showPass,
  setShowPass,
  emailErrorText,
  passwordErrorText,
  setEmailErrorText,
  setPasswordErrorText,
  onBlurEmail,
  onBlurPassword,
  onClickLogin,
  open,
  close,
  onToggleShowPass,
}: {
  email: string
  showPass: boolean
  setEmail: () => void
  password: string
  setShowPass: (showPass: boolean) => void
  setPassword: () => void
  emailErrorText: string
  setEmailErrorText: () => void
  passwordErrorText: string
  setPasswordErrorText: () => void
  onBlurEmail: () => void
  onBlurPassword: () => void
  onClickLogin: () => void
  open: boolean
  close: () => void
  onToggleShowPass: () => void
}) => (
  <ErrorBoundary>
    <StyledDialog aria-labelledby="dialog-title" open={open}>
      <DialogTitle id="dialog-title">Anmeldung</DialogTitle>
      <StyledDiv>
        <FormControl
          error={!!emailErrorText}
          fullWidth
          aria-describedby="emailHelper"
        >
          <InputLabel htmlFor="email">Email</InputLabel>
          <StyledInput
            id="email"
            defaultValue={email}
            onBlur={onBlurEmail}
            autoFocus
            onKeyPress={e => {
              if (e.key === 'Enter') {
                onBlurEmail()
              }
            }}
          />
          <FormHelperText id="emailHelper">{emailErrorText}</FormHelperText>
        </FormControl>
        <FormControl
          error={!!passwordErrorText}
          fullWidth
          aria-describedby="passwortHelper"
        >
          <InputLabel htmlFor="passwort">Passwort</InputLabel>
          <StyledInput
            id="passwort"
            type={showPass ? 'text' : 'password'}
            defaultValue={password}
            onBlur={onBlurPassword}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                onBlurPassword()
              }
            }}
            autoComplete="current-password"
            autoCorrect="off"
            spellCheck="false"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={onToggleShowPass}
                  onMouseDown={e => e.preventDefault()}
                  title={showPass ? 'verstecken' : 'anzeigen'}
                >
                  {showPass ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText id="passwortHelper">
            {passwordErrorText}
          </FormHelperText>
        </FormControl>
      </StyledDiv>
      <DialogActions>
        <Button onClick={close}>abbrechen</Button>
        <Button color="primary" onClick={onClickLogin}>
          Anmelden
        </Button>
      </DialogActions>
    </StyledDialog>
  </ErrorBoundary>
)

export default enhance(Login)
