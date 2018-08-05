import React from 'react'

const Post = (props) => (

  <div className="post-list-item">
    <div>{props.children}</div>
  </div>
)
  
export default Post;