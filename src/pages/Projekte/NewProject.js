// @flow
import React, { useState, useCallback } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import rxdb from 'rxdb'
import pouchdbAdapterHttp from 'pouchdb-adapter-http'
import pouchdbAdapterIdb from 'pouchdb-adapter-idb'

import { setConfig } from 'react-hot-loader'
setConfig({ pureSFC: true })

import ErrorBoundary from '../../components/ErrorBoundary'
import withAuthState from '../../state/withAuth'
import createProjectDb from '../../utils/createProjectDb'

rxdb.plugin(pouchdbAdapterHttp)
rxdb.plugin(pouchdbAdapterIdb)

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

const NewProject = ({ newProjectOpen, setNewProjectOpen, authState }) => {
  const [projectName, setProjectName] = useState('')
  const [projectName2, setProjectName2] = useState('')
  const [nameHelperText, setNameHelperText] = useState('')
  const [name2HelperText, setName2HelperText] = useState('')

  const close = useCallback(() => setNewProjectOpen(false))
  const onClickCreate = useCallback(
    async () => {
      // ensure names are equal
      if (projectName !== projectName2) {
        return setNameHelperText('Die Namen müssen übereinstimmen')
      }
      // ensure projectName is valid for couch db
      if (!/^[a-z][a-z0-9_$()+/-]*$/.test(projectName)) {
        return setNameHelperText(
          <>
            <div>Dieser Name ist leider nicht zulässig.</div>
            <div>Regeln für Namen:</div>
            <ul>
              <li>Beginnt mit einem Buchstaben</li>
              <li>Zulässig sind folgende Zeichen:</li>
              <ul>
                <li>Buchstaben</li>
                <li>Zahlen</li>
                <li>{`_, $, (, ), +, / und -`}</li>
              </ul>
            </ul>
          </>,
        )
      }
      // create new project
      try {
        await createProjectDb({ projectName, authState })
      } catch (error) {
        setNameHelperText(error.message)
        return setName2HelperText(error.message)
      }
      setNameHelperText('')
      setNewProjectOpen(false)
    },
    [projectName, projectName2],
  )
  const onBlurName = useCallback(event => setProjectName(event.target.value))
  const onBlurName2 = useCallback(event => setProjectName2(event.target.value))

  return (
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
            <InputLabel htmlFor="projectName">Name</InputLabel>
            <StyledInput
              id="projectName"
              defaultValue=""
              onBlur={onBlurName}
              autoFocus
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
            />
            <StyledFormHelperText id="nameHelper" component="div">
              {nameHelperText}
            </StyledFormHelperText>
          </FormControl>
          <FormControl
            error={!!name2HelperText}
            fullWidth
            aria-describedby="loginName2Helper"
            required={true}
          >
            <InputLabel htmlFor="projectName2">Name</InputLabel>
            <StyledInput
              id="projectName2"
              type="text"
              defaultValue=""
              onBlur={onBlurName2}
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
            />
            <StyledFormHelperText id="loginName2Helper" component="div">
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
            disabled={!(projectName && projectName2)}
          >
            Projekt erstellen
          </Button>
        </DialogActions>
      </StyledDialog>
    </ErrorBoundary>
  )
}

export default withAuthState(NewProject)
