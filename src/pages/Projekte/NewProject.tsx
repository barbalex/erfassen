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
    close: ({
      setNewProjectOpen,
    }: {
      setNewProjectOpen: (newProjectOpen: boolean) => void
    }) => () => setNewProjectOpen(false),
    onClickCreate: ({
      name,
      name2,
      authState,
      setNameHelperText,
      setName2HelperText,
      setNewProjectOpen,
    }: {
      name: string
      name2: string
      authState: authStateProps
      setNameHelperText: () => void
      setName2HelperText: () => void
      setNewProjectOpen: (newProjectOpen: boolean) => void
    }) => async () => {
      if (name !== name2) {
        return setNameHelperText('Die Namen müssen übereinstimmen')
      }
      const { dbs, name: user } = authState.state

      try {
        await dbs.messages.projectdef.insert({
          name,
          user,
          type: 'projectDef',
        })
      } catch (error) {
        setNameHelperText(error.message)
        return setName2HelperText(error.message)
      }
      setNameHelperText('')
      setNewProjectOpen(false)
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
  onClickCreate,
  close,
  authState,
  newProjectOpen,
  setNewProjectOpen,
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
  onClickCreate: () => void
  close: () => void
  authState: authStateProps
  newProjectOpen: boolean
  setNewProjectOpen: (newProjectOpen: boolean) => void
}) => (
  <ErrorBoundary>
    <StyledDialog aria-labelledby="login-dialog-title" open={newProjectOpen}>
      <DialogTitle id="login-dialog-title">Neues Projekt</DialogTitle>
      <StyledDiv>
        <FormControl
          error={!!nameHelperText}
          fullWidth
          aria-describedby="nameHelper"
          required={true}
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
        <FormControl
          error={!!name2HelperText}
          fullWidth
          aria-describedby="loginName2Helper"
          required={true}
        >
          <InputLabel htmlFor="name2">Name</InputLabel>
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
            {name2HelperText || (
              <>
                <span>Bitte den Namen prüfen und nochmals eingeben.</span>
                <br />
                <span>Er kann danach nicht mehr verändert werden</span>
              </>
            )}
          </FormHelperText>
        </FormControl>
      </StyledDiv>
      <DialogActions>
        <Button onClick={close}>abbrechen</Button>
        <Button
          color="primary"
          onClick={onClickCreate}
          disabled={!(name && name2)}
        >
          Projekt erstellen
        </Button>
      </DialogActions>
    </StyledDialog>
  </ErrorBoundary>
)

export default enhance(NewProject)
