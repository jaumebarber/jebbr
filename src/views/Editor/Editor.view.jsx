import React, { Component } from 'react'
import './Editor.view.styles.scss'

const Editor = ({ article, handleChange, publish }) => (
  <article className="article">
    <h2>
      <input
        className="input"
        type="text"
        data-testid="title"
        name="title"
        value={article.title}
        onChange={handleChange}
        placeholder="New Article"
      />
    </h2>
    <textarea
      className="textarea"
      data-testid="body"
      name="body"
      value={article.body}
      onChange={handleChange}
      placeholder="This is the body of the article"
    ></textarea>
    <button
      className="button is-primary is-small"
      data-testid="publishButton"
      onClick={publish}
    >
      Publish
    </button>
  </article>
)

export default Editor
