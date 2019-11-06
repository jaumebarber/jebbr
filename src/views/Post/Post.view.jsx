import React from 'react'

const Post = ({ title, body, date }) => (
  <article className="tile is-vertical is-3 has-background-white notification">
    <p className="title">{title}</p>
    <div className="content">{body}</div>
    <time dateTime={date}>{date}</time>
  </article>
)

export default Post
