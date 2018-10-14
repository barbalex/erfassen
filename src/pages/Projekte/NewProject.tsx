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
  withState('name', 'setName', ''),
  withState('name2', 'setName2', ''),
  withState('nameErrorText', 'setNameErrorText', ''),
  withState('name2ErrorText', 'setName2ErrorText', ''),
  withHandlers<any, any>({
    close: ({ authState }: { authState: authStateProps }) => () =>
      authState.setLoginOpen(false),
    onClickLogin: ({
      name,
      name2,
      authState,
      setNameErrorText,
      setName2ErrorText,
    }: {
      name: string
      name2: string
      authState: authStateProps
      setNameErrorText: () => void
      setName2ErrorText: () => void
    }) => async () => {
      console.log({ name, name2 })
      try {
        await authState.logIn({ name, name2 })
      } catch (error) {
        setNameErrorText(error.message)
        setName2ErrorText(error.message)
      }
    },
  }),
  withHandlers<any, any>({
    onBlurName: ({ setName }: { setName: (name: string) => void }) => (
      event: Event,
    ) => setName(event.target.value),
    onBlurName2: ({ setName2 }: { setName2: (name2: string) => void }) => (
      event: Event,
    ) => setName2(event.target.value),
  }),
)

const NewProject = ({
  name,
  name2,
  nameErrorText,
  name2ErrorText,
  setNameErrorText,
  setName2ErrorText,
  onBlurName,
  onBlurName2,
  onClickLogin,
  close,
  authState,
}: {
  name: string
  setName: () => void
  name2: string
  setName2: () => void
  nameErrorText: string
  setNameErrorText: () => void
  name2ErrorText: string
  setName2ErrorText: () => void
  onBlurName: () => void
  onBlurName2: () => void
  onClickLogin: () => void
  close: () => void
  authState: authStateProps
}) => (
  <ErrorBoundary>
    <StyledDialog
      aria-labelledby="login-dialog-title"
      open={authState.state.loginOpen}
    >
      <DialogTitle id="login-dialog-title">Anmeldung</DialogTitle>
      <StyledDiv>
        <FormControl
          error={!!nameErrorText}
          fullWidth
          aria-describedby="nameHelper"
        >
          <InputLabel htmlFor="name">Email</InputLabel>
          <StyledInput
            id="name"
            defaultValue=""
            onBlur={onBlurName}
            autoFocus
          />
          <FormHelperText id="nameHelper">{nameErrorText}</FormHelperText>
        </FormControl>
        <FormControl
          error={!!name2ErrorText}
          fullWidth
          aria-describedby="loginPasswortHelper"
        >
          <InputLabel htmlFor="loginPasswort">Passwort</InputLabel>
          <StyledInput
            id="loginPasswort"
            type="text"
            defaultValue={name2}
            onBlur={onBlurName2}
            autoComplete="current-name2"
            autoCorrect="off"
            spellCheck="false"
          />
          <FormHelperText id="loginPasswortHelper">
            {name2ErrorText}
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

export default enhance(NewProject)
