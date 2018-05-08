import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPosts, savePost, deletePost } from '../actions/blogActions';
import { getUser } from '../actions/userActions';

import Post from '../components/Post';


class PostList extends Component {

  state = {
    title: '',
    body: ''
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
      uid: this.props.user.uid
    };
    this.props.savePost(post);
    this.setState({
      title: '',
      body: ''
    });
  }


  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return (
        <Post key={key}>
            <div className="post-title">
              <button className="grow">
                <Link to={`/${key}`}>
                  {post.title} 
                </Link>
              </button>
            </div>
            <div className="post-body">
              {<p>{post.body}</p>}
            </div>
            <div>
              {post.uid === this.props.user.uid &&(
                <div className="button-group">
                  <button className="btn btn-xs delete-btn pull-right" onClick={() => this.props.deletePost(key)}>Delete</button>
                  <button className="btn btn-xs edit-post-btn ">
                    <Link to={`/${key}/editPost`}>Edit</Link>
                  </button>
                </div>
              )}
            </div>
        </Post>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="post-section">
          <div className="col-sm-12">
            <div className="post-form-box">
              <form className="post-form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input 
                    value={this.state.title}
                    className="form-control no-border"
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
                    className="form-control no-border"
                    required />
                </div>
                <div className="form-group">
                  <button className="btn post-btn" >Post</button>
                </div>
              </form>
            </div>
            <div className="post-list">
              {this.renderPosts()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts,
    user: state.user
  }
}

export default connect(mapStateToProps, {getPosts, savePost, deletePost, getUser})(PostList);
