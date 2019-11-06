import React, { Component } from 'react'
import Article from './../Article/Article.container'

class Layout extends Component {
  state = {
    articles: []
  }

  handlePublish = newArticle =>
    this.setState({
      articles: [...this.state.articles, newArticle]
    })

  render = () => {
    const { appTitle } = this.props
    return (
      <div>
        <h1 className="title is-family-monospace">{appTitle}</h1>
        <Article
          onPublish={this.handlePublish}
          articles={this.state.articles}
        />
      </div>
    )
  }
}

export default Layout
