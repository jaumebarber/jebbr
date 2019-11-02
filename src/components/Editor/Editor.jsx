import React, { Component } from 'react'
import './Editor.css'

class Editor extends Component {
  state = {
    editorTitle: '',
    editorText: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  publish = () => {
    const { onSend } = this.props
    onSend(this.state)
    this.setState({
      editorTitle: '',
      editorText: '',
    })
  }

  render = () => {
    const { editorTitle, editorText } = this.state
    return (
      <article className="editor">
        <h2>
          <input
            type="text"
            data-testid="editorTitle"
            name="editorTitle"
            value={editorTitle}
            onChange={this.handleChange}
          />
        </h2>
        <textarea
          data-testid="editorText"
          name="editorText"
          value={editorText}
          onChange={this.handleChange}
        ></textarea>
        <button data-testid="publishButton" onClick={this.publish}>
          Publish
        </button>
      </article>
    )
  }
}

export default Editor
