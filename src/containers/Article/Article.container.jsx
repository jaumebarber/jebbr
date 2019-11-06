import React, { Component } from 'react'
import Editor from '../../views/Editor/Editor.view'
import Post from '../../views/Post/Post.view'

class Article extends Component {
  state = {
    timestamp: Date.now(),
    title: '',
    body: ''
  }

  get date() {
    const longDate = new Date(this.state.timestamp)
    return longDate.toLocaleDateString('en-US')
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  publish = () => {
    const { onPublish } = this.props
    this.setState({
      timestamp: Date.now()
    })
    onPublish(this.state)
    this.setState({
      title: '',
      body: ''
    })
  }

  render = () => {
    const { articles } = this.props
    return (
      <>
        {articles
          ? articles.map(article => (
              <Post
                key={`article-${article.timestamp}`}
                date={this.date}
                title={article.title}
                body={article.body}
              />
            ))
          : ''}
        <Editor
          article={this.state}
          handleChange={this.handleChange}
          publish={this.publish}
        />
      </>
    )
  }
}

export default Article
