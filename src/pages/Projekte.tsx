import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex'
import 'react-reflex/styles.css'

import Layout from '../components/layout'

const Container = styled.div`
  margin-top: 64px;
  min-height: calc(100vh - 64px);
`

const SecondPage = () => (
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
        </ReflexElement>
      </ReflexContainer>
    </Container>
  </Layout>
)

export default SecondPage
