import React from 'react'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import MaterialCard from '@material-ui/core/Card'

import Layout from '../components/layout'

const Container = styled.div`
  padding: 25px;
`
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1700px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
const Card = styled(MaterialCard)`
  padding: 10px;
`
const CardTitle = styled.h3``

const IndexPage = () => (
  <Layout>
    <Container>
      <Typography align="center" variant="title" color="inherit" noWrap>
        Erfassen Sie Daten:
      </Typography>
      <CardContainer>
        <Card>
          <CardTitle>Aller Art</CardTitle>
        </Card>
        <Card>
          <CardTitle>Card 2</CardTitle>
        </Card>
        <Card>
          <CardTitle>Card 3</CardTitle>
        </Card>
        <Card>
          <CardTitle>Card 4</CardTitle>
        </Card>
        <Card>
          <CardTitle>Card 5</CardTitle>
        </Card>
        <Card>
          <CardTitle>Card 6</CardTitle>
        </Card>
        <Card>
          <CardTitle>Card 7</CardTitle>
        </Card>
      </CardContainer>
    </Container>
  </Layout>
)

export default IndexPage
