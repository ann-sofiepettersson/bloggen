import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/userActions';
import { getPosts } from '../actions/blogActions';

class Loading extends Component {

  componentWillMount() {
    const {userLoading, postsLoading} = this.props;
    if (userLoading === undefined) {
      this.props.getUser();
    }

    if (postsLoading === undefined) {
      this.props.getPosts();
    }
  }

  
  componentWillReceiveProps(nextProps) {
    if (nextProps.postsLoading === -1 && nextProps.user !== null) {
      this.props.getPosts();
    }
  }
  
  render() {
    const {userLoading, postsLoading, children} = this.props;
    if ((!userLoading && !postsLoading) || this.props.user === null) {
      return <div>{children}</div>
    } else {
      return <div><h2>Loading...</h2></div>
    }
    
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    userLoading: state.loading.user,
    postsLoading: state.loading.posts
  }
}

export default withRouter(connect(mapStateToProps, {getUser, getPosts})(Loading));