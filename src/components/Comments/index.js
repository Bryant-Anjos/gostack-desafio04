import React from 'react'

function Comment({ comment }) {
  return (
    <div className="comments">
      <img className="avatar" src={comment.author.avatar} alt="" />
      <div>
        <p className="name">{comment.author.name}</p>
        <p className="content">{comment.content}</p>
      </div>
    </div>
  )
}

export default Comment
