import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { editPost } from '../actions/blogActions';

class EditPost extends Component {

  state = {
    title: this.props.post.title,
    body: this.props.post.body
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
      uid: this.props.uid
    };
    this.props.editPost(this.props.match.params.id, post);
    this.setState({
      title: '',
      body: ''
    });
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <div className="edit-post-section">
          <div className="col-sm-12">
            <Link className="back-btn" to="/"> &#171; Tillbaka</Link>
            <form className="edit-form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input 
                  value={this.state.title}
                  className="form-control post-title no-border"
                  type="text" 
                  name="title" 
                  placeholder="Title" 
                  onChange={this.handleChange}
                  required />
              </div>
              <div className="form-group">
                <textarea
                  onChange={this.handleChange}
                  value={this.state.body}
                  type="text"
                  name="body"
                  placeholder="Body"
                  className="form-control edit-post-body no-border"
                  required />
              </div>
              <div className="form-group">
                <button className="btn col-sm-12 edit-btn" >Spara ändring</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    post: state.posts[ownProps.match.params.id],
    uid: state.user.uid
  };
}

export default connect(mapStateToProps, { editPost })(EditPost);