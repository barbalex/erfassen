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

const Signup = ({ authState }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [emailErrorText, setEmailErrorText] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [passwordErrorText, setPasswordErrorText] = useState('')
  const close = useCallback(() => authState.setSignupOpen(false), [])
  const onClickSignup = useCallback(
    async () => {
      try {
        await authState.signUp({ email, password })
      } catch (error) {
        console.log('Signup: error logging in:', error)
      }
    },
    [email, password],
  )
  const onToggleShowPass = useCallback(
    () => {
      setShowPass(!showPass)
    },
    [showPass],
  )
  const onBlurEmail = useCallback(event => setEmail(event.target.value), [])
  const onBlurPassword = useCallback(
    event => setPassword(event.target.value),
    [],
  )

  return (
    <ErrorBoundary>
      <StyledDialog
        aria-labelledby="dialog-title"
        open={authState.state.signupOpen}
      >
        <DialogTitle id="dialog-title">Neues Konto</DialogTitle>
        <StyledDiv>
          <StyledTextField
            label="Email"
            defaultValue={email}
            onBlur={onBlurEmail}
            autoFocus
            fullWidth
            helperText={emailErrorText}
          />
          <FormControl
            error={!!passwordErrorText}
            fullWidth
            aria-describedby="signupPasswortHelper"
          >
            <InputLabel htmlFor="signupPasswort">Passwort</InputLabel>
            <StyledInput
              id="signupPasswort"
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
            <FormHelperText id="signupPasswortHelper">
              {passwordErrorText}
            </FormHelperText>
          </FormControl>
        </StyledDiv>
        <DialogActions>
          <Button onClick={close}>abbrechen</Button>
          <Button color="primary" onClick={onClickSignup}>
            Konto erstellen
          </Button>
        </DialogActions>
      </StyledDialog>
    </ErrorBoundary>
  )
}

export default withAuthState(Signup)
