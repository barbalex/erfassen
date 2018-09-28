import React from 'react'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import MaterialCard from '@material-ui/core/Card'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const Container = styled.div`
  padding: 15px;
  position: relative;
  height: calc(100vh - 64px);
  @media (min-width: 700px) {
    padding: 20px;
  }
  @media (min-width: 1200px) {
    padding: 25px;
  }
  @media (min-width: 1700px) {
    padding: 30px;
  }
`
const PageTitle = styled(Typography)`
  font-size: 2em !important;
  padding-bottom: 15px;
  font-weight: 700 !important;
  text-shadow: 2px 2px 3px white, -2px -2px 3px white, 2px -2px 3px white,
    -2px 2px 3px white;
  @media (min-width: 700px) {
    padding-bottom: 20px;
  }
  @media (min-width: 1200px) {
    padding-bottom: 25px;
  }
  @media (min-width: 1700px) {
    padding-bottom: 30px;
  }
`
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
  }
  @media (min-width: 1700px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
`
const Card = styled(MaterialCard)`
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.8) !important;
  ul {
    margin-bottom: 0;
  }
  li:last-of-type {
    margin-bottom: 0;
  }
`
const CardTitle = styled.h3``

const bgImageStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
}

/*interface Props {
  data: { file: { childImageSharp: Object } }
}*/
const query = graphql`
  query {
    file(relativePath: { eq: "laptop.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout>
        <Container>
          <Img fluid={data.file.childImageSharp.fluid} style={bgImageStyle} />
          <PageTitle align="center" variant="title" color="inherit" noWrap>
            Erfassen Sie:
          </PageTitle>
          <CardContainer>
            <Card>
              <CardTitle>Was Sie wollen</CardTitle>
              <ul>
                <li>Text</li>
                <li>Geometrien</li>
                <li>Fotos</li>
                <li>Audio</li>
                <li>beliebige Dateien</li>
              </ul>
            </Card>
            <Card>
              <CardTitle>Wie Sie wollen</CardTitle>
              <ul>
                <li>
                  Konfigurieren Sie Tabellen und Felder individuell und flexibel
                </li>
                <li>
                  Auch hierarchische Daten-Strukturen sind einfach möglich
                </li>
                <li>
                  Hier (TODO) finden Sie Vorschläge für typische Szenarien
                </li>
                <li>
                  Bestimmen Sie Feld-Typen, Standard-Werte, Muss-Felder,
                  Auswahllisten
                </li>
              </ul>
            </Card>
            <Card>
              <CardTitle>Wo Sie wollen</CardTitle>
              <ul>
                <li>Kein Mobilfunk-Empfang? Kein Problem</li>
                <li>Speichern Sie Hintergrund-Karten zuvor lokal</li>
                <li>
                  Ihre Daten werden synchronisiert, sobald wieder Empfang
                  besteht
                </li>
              </ul>
            </Card>
            <Card>
              <CardTitle>Mit wem Sie wollen</CardTitle>
              <ul>
                <li>Beliebig viele Personen können mitarbeiten</li>
                <li>Ergänzen Sie neue Mitarbeiter rasch und einfach</li>
                <li>
                  Besteht Netzempfang sehen alle Mitarbeiter sofort alle
                  Daten-Änderungen
                </li>
              </ul>
            </Card>
            <Card>
              <CardTitle>Womit Sie wollen</CardTitle>
              <ul>
                <li>Handy, Tablet, Notebook oder PC</li>
                <li>Windows, Linux, MacOS, Android, iOS…</li>
                <li>
                  Ist dem Tablet der Strom ausgegangen? Arbeiten Sie auf dem
                  Handy weiter
                </li>
              </ul>
            </Card>
            <Card>
              <CardTitle>Wann Sie wollen</CardTitle>
              <ul>
                <li>Daten werden laufend synchronisiert</li>
                <li>
                  Sie müssen nie warten, bis Daten anderer Mitarbeiter manuell
                  importiert wurden
                </li>
              </ul>
            </Card>
            <Card>
              <CardTitle>Möglichst effizient</CardTitle>
              <ul>
                <li>
                  Bereiten Sie ein Projekt nur einmal vor und nach. Egal,
                  wieviele Personen mitarbeiten
                </li>
                <li>
                  Digitalisieren Sie nie mehr nachträglich
                  Papier-Aufzeichnungen...
                </li>
                <li>...und sparen Sie sich damit viele Fehler und Ärger</li>
                <li>
                  Sie haben die Feld-Mappe verloren? Schade um das Gerät. Die
                  Daten wurden zum Glück synchronisiert
                </li>
              </ul>
            </Card>
            <Card>
              <CardTitle>Probieren Sie's aus</CardTitle>
              <ul>
                <li>Das Test-Projekt steht zur freien Verfügung</li>
                <li>TODO: Link zum Test-Projekt</li>
                <li>Für eigene Projekte brauchen Sie ein Konto</li>
              </ul>
            </Card>
          </CardContainer>
        </Container>
      </Layout>
    )}
  />
)

export default IndexPage
