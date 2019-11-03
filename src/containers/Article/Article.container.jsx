import React, { Component } from 'react'
import Editor from '../../components/Editor/Editor.component'

class Article extends Component {
  state = {
    articleTitle: '',
    articleText: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  publish = () => {
    const { onSend } = this.props
    onSend(this.state)
    this.setState({
      articleTitle: '',
      articleText: ''
    })
  }

  render = () => (
    <Editor
      state={this.state}
      handleChange={this.handleChange}
      publish={this.publish}
    />
  )
}

export default Article
