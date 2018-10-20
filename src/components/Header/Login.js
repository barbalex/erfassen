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
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'

import ErrorBoundary from '../ErrorBoundary'
import withAuthState from '../../state/withAuth'

const StyledDialog = styled(Dialog)``
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`
const StyledTextField = styled(TextField)`
  div:before {
    border-bottom-color: rgba(0, 0, 0, 0.1) !important;
  }
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
  withHandlers({
    close: ({ authState }) => () => authState.setLoginOpen(false),
    onClickSignup: ({ authState }) => () => {
      authState.setLoginOpen(false)
      authState.setSignupOpen(true)
    },
    onClickLogin: ({
      email,
      password,
      authState,
      setEmailErrorText,
      setPasswordErrorText,
    }) => async () => {
      console.log({ email, password })
      try {
        await authState.logIn({ email, password })
      } catch (error) {
        console.log('Error logging in:', error)
        setEmailErrorText(error.message)
        setPasswordErrorText(error.message)
      }
    },
    onToggleShowPass: ({ showPass, setShowPass }) => () => {
      setShowPass(!showPass)
    },
  }),
  withHandlers({
    onBlurEmail: ({ setEmail }) => event => setEmail(event.target.value),
    onBlurPassword: ({ setPassword }) => event =>
      setPassword(event.target.value),
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
  onClickSignup,
  close,
  onToggleShowPass,
  authState,
}) => (
  <ErrorBoundary>
    <StyledDialog
      aria-labelledby="login-dialog-title"
      open={authState.state.loginOpen}
    >
      <DialogTitle id="login-dialog-title">Anmeldung</DialogTitle>
      <StyledDiv>
        <StyledTextField
          label="Email"
          defaultValue={email}
          onBlur={onBlurEmail}
          autoFocus
          fullWidth
          helperText={emailErrorText}
        />
        <FormControl error={!!passwordErrorText} fullWidth>
          <InputLabel htmlFor="loginPasswort">Passwort</InputLabel>
          <StyledInput
            id="loginPasswort"
            type={showPass ? 'text' : 'password'}
            defaultValue={password}
            onBlur={onBlurPassword}
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
          <FormHelperText>{passwordErrorText}</FormHelperText>
        </FormControl>
      </StyledDiv>
      <DialogActions>
        <Button onClick={close}>abbrechen</Button>
        <Button color="primary" onClick={onClickLogin}>
          Anmelden
        </Button>
        <Button onClick={onClickSignup}>Neues Konto</Button>
      </DialogActions>
    </StyledDialog>
  </ErrorBoundary>
)

export default enhance(Login)
