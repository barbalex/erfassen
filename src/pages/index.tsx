import React from 'react'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import MaterialCard from '@material-ui/core/Card'

import Layout from '../components/layout'

const Container = styled.div`
  padding: 30px;
`
const PageTitle = styled(Typography)`
  font-size: 2em !important;
  padding-bottom: 30px;
`
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
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
  padding: 30px;
`
const CardTitle = styled.h3``

const IndexPage = () => (
  <Layout>
    <Container>
      <PageTitle align="center" variant="title" color="inherit" noWrap>
        Erfassen Sie Daten:
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
          <p>Konfigurieren Sie Tabellen und Felder individuell und flexibel.</p>
          <p>Hier (TODO) finden Sie Vorschläge für typische Szenarien.</p>
        </Card>
        <Card>
          <CardTitle>Wo Sie wollen</CardTitle>
          <p>Kein Mobilfunk-Empfang? Kein Problem.</p>
          <p>Sie können benötigte Hintergrund-Karten zuvor lokal speichern.</p>
          <p>
            Ihre Daten werden synchronisiert, sobald wieder Empfang besteht.
          </p>
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
              Ist dem Tablet der Strom ausgegangen? Arbeiten Sie auf dem Handy
              weiter
            </li>
          </ul>
        </Card>
        <Card>
          <CardTitle>Wann Sie wollen</CardTitle>
          <p>Daten werden laufend synchronisiert.</p>
          <p>
            Sie müssen nie warten, bis Daten anderer Mitarbeiter manuell
            importiert wurden.
          </p>
        </Card>
        <Card>
          <CardTitle>Möglichst effizient</CardTitle>
          <p>
            Bereiten Sie ein Projekt nur einmal vor und nach. Egal, wieviele
            Personen mitarbeiten.
          </p>
          <p>
            Digitalisieren Sie nie mehr nachträglich Papier-Aufzeichnungen...
          </p>
          <p>...und sparen Sie sich damit viele Fehler und Ärger.</p>
        </Card>
        <Card>
          <CardTitle>Probieren Sie's aus</CardTitle>
          <p>Im Test-Projekt können Sie ausprobieren, wie es funktioniert.</p>
          <p>TODO: Link zum Test-Projekt.</p>
          <p>Um eigene Projekte zu gründen, brauchen Sie ein Konto.</p>
        </Card>
      </CardContainer>
    </Container>
  </Layout>
)

export default IndexPage
