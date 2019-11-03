import React from 'react'
import './App.component.styles.scss'
import Article from '../../containers/Article/Article.container'

const handleSend = newArticle => {
  console.log(newArticle)
}

const App = ({ appTitle }) => (
  <div className="app">
    <h1>{appTitle}</h1>
    <Article onSend={handleSend} />
  </div>
)

export default App
