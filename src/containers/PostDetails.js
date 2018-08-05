import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import _ from 'lodash';
import Comment from '../components/Comment';
import { deleteComment } from '../actions/blogActions';
import { getUser } from '../actions/userActions';

class PostDetails extends Component {

  renderComments() {
    const { post } = this.props;
    return _.map(post.comments, (comment, key) => {
      return (
        <Comment key={key} id={key} >
          {comment.commentBody}
          {comment.uid === this.props.user.uid &&(
            <div className="button-group">
              <button className="btn delete-btn btn-xs pull-right" onClick={() => this.props.deleteComment(this.props.match.params.id, key)}>Delete</button>
            </div>
          )}
        </Comment>
      );
    });
  }

  render() {

    const { post } = this.props;
    
    return (
      <div className="container">
        <div className="post-detail-section">
          <div className="col-sm-12">
            <Link className="back-btn" to="/"> &#171; Tillbaka</Link>
            <div className="post-detail">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <div className="comment-section">
              <h4>Comments</h4>
              <CommentForm id={this.props.match.params.id} />
              {this.renderComments()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    post: state.posts[ownProps.match.params.id],
    uid: state.user.uid,
    user: state.user
  };
}

export default connect(mapStateToProps, { deleteComment, getUser })(PostDetails);