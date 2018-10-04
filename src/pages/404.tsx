import React from 'react'
import Layout from '../components/layout'

const NotFoundPage: React.StatelessComponent<{}> = () => (
  <Layout>
    <h1>Nicht gefunden</h1>
    <p>Für diese URL existiert keine Seite... schade.</p>
  </Layout>
)

export default NotFoundPage
