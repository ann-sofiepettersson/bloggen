import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions/blogActions';

class CommentForm extends Component {

  state = {
    commentBody: ''
  };

  handleChange = (e) => {
    this.setState({
      commentBody: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      commentBody: this.state.commentBody,
      uid: this.props.uid
    }
    
    this.props.saveComment(this.props.id, comment);
    this.setState({ commentBody: '' })
  }

  render() {
    return (
      <div className="comment-form-box">
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <textarea 
              onChange={this.handleChange}
              value={this.state.commentBody}
              type="text"
              name="commentBody"
              className="form-control no-border comment-text"
              placeholder="Skriv kommentar..."
              required />
            
          </div>
          <div className="form-group">
            <button className="btn btn-xs comment-btn">Skicka kommentar</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    uid: state.user.uid
  };
}

export default connect(mapStateToProps, { saveComment })(CommentForm);