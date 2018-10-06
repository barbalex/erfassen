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
import { withDb } from '../../context/db'
import ErrorBoundary from '../../components/ErrorBoundary'

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
  db: any
  setDb: () => void
}

const enhance = compose(withDb)

const ProjektePage: React.SFC<Props> = ({ db }) => {
  if (!db) {
    return (
      <Layout>
        <LoadingContainer>Lade daten...</LoadingContainer>
      </Layout>
    )
  }

  const orte = db.ort
    ? db.ort.dump().then((orte: any) => console.log('orte:', orte.docs))
    : []
  const beobs = db.beob
    ? db.beob.dump().then((beobs: any) => console.log('beobs:', beobs.docs))
    : []
  console.log('Projekte, db:', db)

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
                  db.ort.insert({
                    name: 'test-ort',
                    type: 'ort',
                  })
                }
              >
                insert ort
              </button>
              <button
                onClick={async () =>
                  db.beob.insert({
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
      </Layout>
    </ErrorBoundary>
  )
}

export default enhance(ProjektePage)
