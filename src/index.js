import React from 'react'
import { render } from 'react-dom'
import App from './components/App/App'

const TITLE = document.querySelector('title').innerHTML

render(<App appTitle={TITLE} />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./components/App/App')
}
