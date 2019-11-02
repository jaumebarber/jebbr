import React from 'react'
import './App.css'
import Editor from '../Editor/Editor'

const handleSend = newArticle => {
  console.log(newArticle)
}

const App = ({ appTitle }) => (
  <div className="app">
    <h1>{appTitle}</h1>
    <Editor onSend={handleSend} />
  </div>
)

export default App
