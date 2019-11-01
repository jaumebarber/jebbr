import React from 'react'
import { render } from 'react-dom'
import App from './components/App/App'

render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!')
    printMe()
  })
}
