import React from 'react'
import styled from 'styled-components'
import {
  ReflexContainer as OrigReflexContainer,
  ReflexSplitter,
  ReflexElement,
} from 'react-reflex'
import 'react-reflex/styles.css'
import compose from 'recompose/compose'

import Layout from '../components/layout'
import { withDb } from '../context/db.tsx'

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

const enhance = compose(withDb)

const ProjektePage = ({ db }: { db: any }) => {
  if (!db) {
    return (
      <Layout>
        <LoadingContainer>Lade daten...</LoadingContainer>
      </Layout>
    )
  }

  const orte = db.ort
    .dump()
    .then((orte: any) => console.log('orte:', orte.docs))
  const beobs = db.beob
    .dump()
    .then((beobs: any) => console.log('beobs:', beobs.docs))

  return (
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
  )
}

export default enhance(ProjektePage)
