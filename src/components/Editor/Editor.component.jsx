import React, { Component } from 'react'
import './Editor.component.styles.scss'

const Editor = ({ state, handleChange, publish }) =>
  <article className="article">
    <h2>
      <input
        type="text"
        data-testid="articleTitle"
        name="articleTitle"
        value={state.articleTitle}
        onChange={handleChange}
      />
    </h2>
    <textarea
      data-testid="articleText"
      name="articleText"
      value={state.articleText}
      onChange={handleChange}
    ></textarea>
    <button data-testid="publishButton" onClick={publish}>
      Publish
    </button>
  </article>

export default Editor
