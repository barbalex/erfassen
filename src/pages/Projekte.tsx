import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

const Container = styled.div`
  margin-top: 64px;
  min-height: calc(100vh - 64px);
`

const SecondPage = () => (
  <Layout>
    <Container>
      <h1>Projekte</h1>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default SecondPage
