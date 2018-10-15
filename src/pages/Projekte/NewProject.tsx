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
import getProjectDbName from '../../utils/getProjectDbName'

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
const StyledFormHelperText = styled(FormHelperText)`
  margin-bottom: 5px !important;
  div {
    padding: 2px 0;
  }
  li {
    margin-bottom: 2px !important;
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
      // ensure names are equal
      if (name !== name2) {
        return setNameHelperText('Die Namen müssen übereinstimmen')
      }
      // ensure name is valid for couch db
      if (!/^[a-z][a-z0-9_$()+/-]*$/.test(name)) {
        return setNameHelperText(
          <>
            <div>Dieser Name ist leider nicht zulässig.</div>
            <div>Regeln für Namen:</div>
            <ul>
              <li>Beginnt mit einem Buchstaben</li>
              <li>Zulässige Zeichen sind:</li>
              <ul>
                <li>Buchstaben</li>
                <li>Zahlen</li>
                <li>_, $, (, ), +, / und -</li>
              </ul>
            </ul>
          </>,
        )
      }
      const { dbs, name: user } = authState.state
      const projectDbName = getProjectDbName({
        userName: user,
        projectName: name,
      })
      // check if this dbname already exists
      const dbNames = Object.keys(dbs)
      if (dbNames.includes(projectDbName)) {
        return setNameHelperText('Dieser Name wird schon benutzt')
      }

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
          <StyledFormHelperText id="nameHelper">
            {nameHelperText}
          </StyledFormHelperText>
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
          <StyledFormHelperText id="loginName2Helper">
            {name2HelperText || (
              <>
                <span>Bitte den Namen prüfen und nochmals eingeben.</span>
                <br />
                <span>Er kann danach nicht mehr verändert werden</span>
              </>
            )}
          </StyledFormHelperText>
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
