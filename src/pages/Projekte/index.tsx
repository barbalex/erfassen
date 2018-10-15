import React from 'react'
import styled from 'styled-components'
import {
  ReflexContainer as OrigReflexContainer,
  ReflexSplitter,
  ReflexElement,
} from 'react-reflex'
import 'react-reflex/styles.css'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'

import Layout from '../../components/Layout'
import withAuthState from '../../state/withAuth'
import { Props as authStateProps } from '../../state/Auth'
import ErrorBoundary from '../../components/ErrorBoundary'
import Login from '../../components/Header/Login'
import NewProject from './NewProject'

const Container = styled.div`
  margin-top: 64px;
  min-height: calc(100vh - 64px);
`
const LoadingContainer = styled(Container)`
  padding: 20px;
`
const ReflexContainer = styled(OrigReflexContainer)`
  height: calc(100vh - 64px) !important;
`

interface Props {
  authState: authStateProps
  newProjectOpen: boolean
  setNewProjectOpen: (newProjectOpen: boolean) => void
}

const enhance = compose(
  withAuthState,
  withState('newProjectOpen', 'setNewProjectOpen', false),
)

const ProjektePage: React.SFC<Props> = ({
  authState,
  newProjectOpen,
  setNewProjectOpen,
}) => {
  const { dbs, syncs } = authState.state
  /*
  if (!dbs) {
    return (
      <Layout>
        <LoadingContainer>Lade daten...</LoadingContainer>
      </Layout>
    )
  }*/

  console.log('Projekte', { dbs, syncs })

  return (
    <ErrorBoundary>
      <Layout>
        <Container>
          <ReflexContainer orientation="vertical">
            <ReflexElement
              flex={0.3}
              propagateDimensions={true}
              renderOnResizeRate={200}
              renderOnResize={true}
            >
              <p>Tree</p>
              <button onClick={() => setNewProjectOpen(true)}>
                create project
              </button>
            </ReflexElement>
            <ReflexSplitter />
            <ReflexElement
              propagateDimensions={true}
              renderOnResizeRate={200}
              renderOnResize={true}
            >
              <p>Form</p>
            </ReflexElement>
          </ReflexContainer>
        </Container>
        {!name && <Login open={!name} setLoginOpen={authState.setLoginOpen} />}
        {newProjectOpen && (
          <NewProject
            newProjectOpen={newProjectOpen}
            setNewProjectOpen={setNewProjectOpen}
          />
        )}
      </Layout>
    </ErrorBoundary>
  )
}

export default enhance(ProjektePage)
