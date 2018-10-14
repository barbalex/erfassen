// @flow
import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'

import ErrorBoundary from '../../components/ErrorBoundary'
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
  withState('nameHelperText', 'setNameHelperText', ''),
  withState('name2HelperText', 'setName2HelperText', ''),
  withHandlers<any, any>({
    close: ({ authState }: { authState: authStateProps }) => () =>
      authState.setLoginOpen(false),
    onClickLogin: ({
      name,
      name2,
      authState,
      setNameHelperText,
      setName2HelperText,
    }: {
      name: string
      name2: string
      authState: authStateProps
      setNameHelperText: () => void
      setName2HelperText: () => void
    }) => async () => {
      console.log({ name, name2 })
      try {
        await authState.logIn({ name, name2 })
      } catch (error) {
        setNameHelperText(error.message)
        setName2HelperText(error.message)
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
  nameHelperText,
  name2HelperText,
  setNameHelperText,
  setName2HelperText,
  onBlurName,
  onBlurName2,
  onClickLogin,
  close,
  authState,
  newProjectOpen,
}: {
  name: string
  setName: () => void
  name2: string
  setName2: () => void
  nameHelperText: string
  setNameHelperText: () => void
  name2HelperText: string
  setName2HelperText: () => void
  onBlurName: () => void
  onBlurName2: () => void
  onClickLogin: () => void
  close: () => void
  authState: authStateProps
  newProjectOpen: boolean
}) => (
  <ErrorBoundary>
    <StyledDialog aria-labelledby="login-dialog-title" open={newProjectOpen}>
      <DialogTitle id="login-dialog-title">Neues Projekt</DialogTitle>
      <StyledDiv>
        <FormControl
          error={!!nameHelperText}
          fullWidth
          aria-describedby="nameHelper"
        >
          <InputLabel htmlFor="name">Name</InputLabel>
          <StyledInput
            id="name"
            defaultValue=""
            onBlur={onBlurName}
            autoFocus
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
          />
          <FormHelperText id="nameHelper">{nameHelperText}</FormHelperText>
        </FormControl>
        {name && (
          <FormControl
            error={!!name2HelperText}
            fullWidth
            aria-describedby="loginName2Helper"
          >
            <InputLabel htmlFor="name2">Name (nochmals)</InputLabel>
            <StyledInput
              id="name2"
              type="text"
              defaultValue=""
              onBlur={onBlurName2}
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
            />
            <FormHelperText id="loginName2Helper">
              {name2HelperText ||
                'Bitte den Namen nochmals eingeben und prüfen: er kann danach nicht mehr verändert werden'}
            </FormHelperText>
          </FormControl>
        )}
      </StyledDiv>
      <DialogActions>
        <Button onClick={close}>abbrechen</Button>
        {name &&
          name2 && (
            <Button color="primary" onClick={onClickLogin}>
              Projekt erstellen
            </Button>
          )}
      </DialogActions>
    </StyledDialog>
  </ErrorBoundary>
)

export default enhance(NewProject)
