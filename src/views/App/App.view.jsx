import React from 'react'
import './App.view.styles.scss'
import Layout from '../../containers/Layout/Layout.container'

const App = ({ appTitle }) => (
  <div className="app">
    <Layout appTitle={appTitle} />
  </div>
)

export default App
