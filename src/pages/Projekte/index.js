import React from 'react'
import styled from 'styled-components'
import {
  ReflexContainer as OrigReflexContainer,
  ReflexSplitter,
  ReflexElement,
} from 'react-reflex'
import 'react-reflex/styles.css'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withLifecycle from '@hocs/with-lifecycle'

import Layout from '../../components/Layout'
import withAuthState from '../../state/withAuth'
import ErrorBoundary from '../../components/ErrorBoundary'
import NewProject from './NewProject'

const Container = styled.div`
  margin-top: 64px;
  min-height: calc(100vh - 64px);
`
const ReflexContainer = styled(OrigReflexContainer)`
  height: calc(100vh - 64px) !important;
`

const enhance = compose(
  withAuthState,
  withState('newProjectOpen', 'setNewProjectOpen', false),
  withLifecycle({
    onDidMount({ authState }) {
      const { email } = authState.state
      if (!email) authState.setLoginOpen(true)
    },
  }),
)

const ProjektePage = ({ authState, newProjectOpen, setNewProjectOpen }) => {
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
