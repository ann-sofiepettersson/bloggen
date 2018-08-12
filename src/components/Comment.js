import React from 'react';

const Comment = (props) => (
  <div className="comment-item">
    <div> &#9866; {props.children} </div>
    {/* {props.delete && <button className="btn btn-danger btn-xs pull-right" onClick={props.deleteComment}>Ta bort</button>} */}
  </div>
);

export default Comment;