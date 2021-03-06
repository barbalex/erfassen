import React from 'react'
import Typography from '@material-ui/core/Typography'
import MaterialCard from '@material-ui/core/Card'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import ErrorBoundary from '../components/ErrorBoundary'

const ScrollContainer = styled.div`
  height: calc(100vh - 64px);
  overflow-y: auto;
  margin-top: 64px;
`
const Container = styled.div`
  padding: 15px;
  position: relative;
  min-height: 100%;
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
  p {
    margin-bottom: 10px !important;
  }
  p:last-of-type {
    margin-bottom: 5px !important;
    margin-top: 10px !important;
  }
`
const MoreContainer = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 25px;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 25px;
  }
  @media (min-width: 1700px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 30px;
  }
  p {
    padding-left: 30px;
    font-weight: 700;
    text-shadow: 2px 2px 3px white, -2px -2px 3px white, 2px -2px 3px white,
      -2px 2px 3px white;
    margin: 0;
  }
  a {
    padding-left: 30px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.8);
    text-shadow: 2px 2px 3px white, -2px -2px 3px white, 2px -2px 3px white,
      -2px 2px 3px white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
const Card = styled(MaterialCard)`
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.75) !important;
  ul {
    margin-bottom: 0;
  }
  li:last-of-type {
    margin-bottom: 0;
  }
  li {
    font-weight: 500;
  }
`
const CardTitle = styled.h3``
const MoreLink = styled(Link)`
  padding-left: 30px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  text-shadow: 2px 2px 3px white, -2px -2px 3px white, 2px -2px 3px white,
    -2px 2px 3px white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const bgImageStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
}

const query = graphql`
  query {
    file(relativePath: { eq: "laptop.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

const IndexPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <ErrorBoundary>
        <Layout>
          <ScrollContainer>
            <Container>
              <Img
                sizes={data.file.childImageSharp.sizes}
                fluid={data.file.childImageSharp.fluid}
                style={bgImageStyle}
              />
              <PageTitle align="center" variant="h6" color="inherit" noWrap>
                Erfassen Sie:
              </PageTitle>
              <CardContainer>
                <Card>
                  <CardTitle>Was Sie wollen</CardTitle>
                  <ul>
                    <li>Text, Zahlen, Ja/Nein-Werte</li>
                    <li>Bezüge zu anderen Tabellen</li>
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
                      Konfigurieren Sie Tabellen und Felder individuell und
                      flexibel
                    </li>
                    <li>
                      Bestimmen Sie Feld-Typen, Standard-Werte, Muss-Felder,
                      Auswahllisten
                    </li>
                    <li>
                      Sie brauchen hierarchische Daten-Strukturen? Kein Problem!
                    </li>
                    <li>
                      Hier (TODO) finden Sie Vorschläge für typische Szenarien
                    </li>
                  </ul>
                </Card>
                <Card>
                  <CardTitle>Wo Sie wollen</CardTitle>
                  <ul>
                    <li>Keine Internet-Verbindung? Kein Problem</li>
                    <li>erfassen.ch funktioniert auch offline</li>
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
                      Besteht eine Internet-Verbindung, sehen alle Mitarbeiter
                      live alle Daten-Änderungen
                    </li>
                  </ul>
                </Card>
                <Card>
                  <CardTitle>Womit Sie wollen</CardTitle>
                  <ul>
                    <li>Handy, Tablet, Notebook oder PC</li>
                    <li>Windows, Linux, MacOS, Android, iOS…</li>
                    <li>
                      Ist dem Tablet der Strom ausgegangen?
                      <br />
                      Arbeiten Sie einfach auf dem Handy weiter
                    </li>
                  </ul>
                </Card>
                <Card>
                  <CardTitle>Wozu Sie wollen</CardTitle>
                  <p>Beispiele aus dem Naturschutz (wo ich herkomme):</p>
                  <ul>
                    <li>Natur- und Landschafts-Inventare</li>
                    <li>Kartierung von Lebensräumen</li>
                    <li>
                      Daten für Bewirtschaftungs-Verträge, Vernetzungs-Projekte,
                      Landschafts-Qualitäts-Projekte
                    </li>
                  </ul>
                  <p>Was wären Beispiele aus Ihrem Bereich?</p>
                </Card>
                <Card>
                  <CardTitle>Effizient</CardTitle>
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
                      Sie haben die Feld-Mappe verloren? Zum Glück wurden die
                      Daten synchronisiert!
                    </li>
                  </ul>
                </Card>
                <Card>
                  <CardTitle>{`Los geht's`}</CardTitle>
                  <ul>
                    <li>Probieren Sie im Test-Projekt alles aus</li>
                    <li>TODO: Link zum Test-Projekt</li>
                    <li>Für eigene Projekte brauchen Sie ein Konto</li>
                    <li>
                      Mit Ihren Projekten verdienen wir unser Geld (
                      <Link to="/Benutzer-Dokumentation/Preise/">Preise</Link>)
                    </li>
                  </ul>
                </Card>
              </CardContainer>
              <MoreContainer>
                <a
                  href="https://gabriel-software.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Über uns
                </a>
                <a
                  href="mailto:alex@gabriel-software.ch?subject=erfassen.ch"
                  rel="noopener"
                >
                  Kontakt
                </a>
                <p>Blog (TODO)</p>
                <MoreLink to="/Benutzer-Dokumentation/">
                  Benutzer-Dokumentation
                </MoreLink>
                <MoreLink to="/Technische-Dokumentation/">
                  Technische Dokumentation
                </MoreLink>
                <MoreLink to="/Benutzer-Dokumentation/Preise/">Preise</MoreLink>
                <p>Datenschutz (TODO)</p>
                <p>Allgemeine Geschäftsbedingungen (TODO)</p>
              </MoreContainer>
            </Container>
          </ScrollContainer>
        </Layout>
      </ErrorBoundary>
    )}
  />
)

export default IndexPage
