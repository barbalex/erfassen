// @flow
import React, { useState, useCallback } from 'react'
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

const Login = ({ authState }) => {
  const { setLoginOpen, setSignupOpen, logIn } = authState
  const { loginOpen } = authState.state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [emailErrorText, setEmailErrorText] = useState('')
  const [passwordErrorText, setPasswordErrorText] = useState('')
  const close = useCallback(() => setLoginOpen(false), [])
  const onClickSignup = useCallback(() => {
    setLoginOpen(false)
    setSignupOpen(true)
  }, [])
  const onClickLogin = useCallback(
    async () => {
      try {
        await logIn({ email, password })
      } catch (error) {
        console.log('Error logging in:', error)
        setEmailErrorText(error.message)
        setPasswordErrorText(error.message)
      }
    },
    [email, password],
  )
  const onToggleShowPass = useCallback(() => setShowPass(!showPass), [showPass])
  const onChangeEmail = useCallback(event => {
    setEmail(event.target.value)
  }, [])
  const onChangePassword = useCallback(
    event => setPassword(event.target.value),
    [],
  )

  return (
    <ErrorBoundary>
      <StyledDialog aria-labelledby="login-dialog-title" open={loginOpen}>
        <DialogTitle id="login-dialog-title">Anmeldung</DialogTitle>
        <StyledDiv>
          <StyledTextField
            label="Email"
            value={email}
            onChange={onChangeEmail}
            autoFocus
            fullWidth
            helperText={emailErrorText}
          />
          <FormControl error={!!passwordErrorText} fullWidth>
            <InputLabel htmlFor="loginPasswort">Passwort</InputLabel>
            <StyledInput
              id="loginPasswort"
              type={showPass ? 'text' : 'password'}
              value={password}
              onChange={onChangePassword}
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
}

export default withAuthState(Login)
