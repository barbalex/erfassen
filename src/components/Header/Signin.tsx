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
  withState('name', 'setName', ''),
  withState('password', 'setPassword', ''),
  withState('showPass', 'setShowPass', false),
  withState('nameErrorText', 'setNameErrorText', ''),
  withState('passwordErrorText', 'setPasswordErrorText', ''),
  withHandlers({
    fetchLogin: () => async () => {
      // TODO
    },
  }),
  withHandlers({
    onBlurName: () => () => {
      // TODO
    },
    onBlurPassword: () => () => {
      // TODO
    },
  }),
)

const Signin = ({
  name,
  password,
  showPass,
  setShowPass,
  nameErrorText,
  passwordErrorText,
  setNameErrorText,
  setPasswordErrorText,
  onBlurName,
  onBlurPassword,
  fetchLogin,
  user,
  open,
}: {
  name: string
  showPass: Boolean
  setName: () => void
  password: string
  setShowPass: () => void
  setPassword: () => void
  nameErrorText: string
  setNameErrorText: () => void
  passwordErrorText: string
  setPasswordErrorText: () => void
  onBlurName: () => void
  onBlurPassword: () => void
  fetchLogin: () => void
  user: Object
  open: boolean
}) => (
  <ErrorBoundary>
    <StyledDialog aria-labelledby="dialog-title" open={open}>
      <DialogTitle id="dialog-title">Anmeldung</DialogTitle>
      <StyledDiv>
        <FormControl
          error={!!nameErrorText}
          fullWidth
          aria-describedby="nameHelper"
        >
          <InputLabel htmlFor="name">Name</InputLabel>
          <StyledInput
            id="name"
            defaultValue={name}
            onBlur={onBlurName}
            autoFocus
            onKeyPress={e => {
              if (e.key === 'Enter') {
                onBlurName()
              }
            }}
          />
          <FormHelperText id="nameHelper">{nameErrorText}</FormHelperText>
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
                  onClick={() => setShowPass(!showPass)}
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
        <Button color="primary" onClick={fetchLogin}>
          anmelden
        </Button>
      </DialogActions>
    </StyledDialog>
  </ErrorBoundary>
)

export default enhance(Signin)
