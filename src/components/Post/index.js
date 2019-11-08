import React from 'react'

import './style.css'

import Comment from '../Comments'

function Post({ post }) {
  const { comments } = post

  return (
    <div id="post">
      <div className="author">
        <img className="avatar" src={post.author.avatar} alt=""/>
          <div>
            <p className="name">{post.author.name}</p>
            <p className="date">{post.date}</p>
          </div>
        <p className="content">{post.content}</p>
      </div>

      { comments.map(comment => <Comment key={comment.id} comment={comment} />) }
    </div>
  )
}

export default Post
