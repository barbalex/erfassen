import React from 'react'
import styled from 'styled-components'
import {
  ReflexContainer as OrigReflexContainer,
  ReflexSplitter,
  ReflexElement,
} from 'react-reflex'
import 'react-reflex/styles.css'
import compose from 'recompose/compose'

import Layout from '../../components/Layout'
import withRxDbState from '../../state/withRxDb.js'
import withAuthState from '../../state/withAuth'
import { Props as authStateProps } from '../../state/Auth'
import ErrorBoundary from '../../components/ErrorBoundary'
import Login from '../../components/Header/Login'

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
  rxDbState: any
  authState: authStateProps
}

const enhance = compose(
  withRxDbState,
  withAuthState,
)

const ProjektePage: React.SFC<Props> = ({ rxDbState, authState }) => {
  const { rxDb } = rxDbState.state
  if (!rxDb) {
    return (
      <Layout>
        <LoadingContainer>Lade daten...</LoadingContainer>
      </Layout>
    )
  }

  /*
  const orte = rxDb.ort
    ? rxDb.ort.dump().then((orte: any) => console.log('orte:', orte.docs))
    : []
  const beobs = rxDb.beob
    ? rxDb.beob.dump().then((beobs: any) => console.log('beobs:', beobs.docs))
    : []*/
  const { name } = authState.state

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
            </ReflexElement>
            <ReflexSplitter />
            <ReflexElement
              propagateDimensions={true}
              renderOnResizeRate={200}
              renderOnResize={true}
            >
              <p>Form</p>
              <button
                onClick={async () =>
                  rxDb.ort.insert({
                    name: 'test-ort',
                    type: 'ort',
                  })
                }
              >
                insert ort
              </button>
              <button
                onClick={async () =>
                  rxDb.beob.insert({
                    art: 'test-art',
                    type: 'beob',
                  })
                }
              >
                insert beob
              </button>
            </ReflexElement>
          </ReflexContainer>
        </Container>
        {!name && <Login open={!name} setLoginOpen={authState.setLoginOpen} />}
      </Layout>
    </ErrorBoundary>
  )
}

export default enhance(ProjektePage)
