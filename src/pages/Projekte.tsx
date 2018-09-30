import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {
  ReflexContainer as OrigReflexContainer,
  ReflexSplitter,
  ReflexElement,
} from 'react-reflex'
import 'react-reflex/styles.css'
import app from 'ampersand-app'

import Layout from '../components/layout'

const Container = styled.div`
  margin-top: 64px;
  min-height: calc(100vh - 64px);
`
const ReflexContainer = styled(OrigReflexContainer)`
  height: calc(100vh - 64px) !important;
`

const SecondPage = () => {
  console.log('Projekte, db:', app.db)
  const orte = app.db.ort
    .dump()
    .then((orte: any) => console.log('orte:', orte.docs))
  const beobs = app.db.beob
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
                app.db.ort.insert({
                  name: 'test-ort',
                  type: 'ort',
                })
              }
            >
              insert ort
            </button>
            <button
              onClick={async () =>
                app.db.beob.insert({
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

export default SecondPage
