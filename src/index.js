import React from 'react'
import { render } from 'react-dom'
import App from './views/App/App.view'
require('./sass/jebbr.scss')

const TITLE = document.querySelector('title').innerHTML

render(<App appTitle={TITLE} />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./views/App/App.view')
}
