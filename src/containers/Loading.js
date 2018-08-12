import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/userActions';
import { getPosts } from '../actions/blogActions';
import { getUserList } from '../actions/handleUserActions';

class Loading extends Component {

  componentWillMount() {
   
    const {userLoading, postsLoading, userlistLoading} = this.props;
    console.log(userLoading);
    if (userLoading === undefined) {
      this.props.getUser();
      
    }

    if (postsLoading === undefined) {
      this.props.getPosts();
    }

    if (userlistLoading === undefined) {
      this.props.getUserList();
    }
  }
  

  
  componentWillReceiveProps(nextProps) {
    if (nextProps.postsLoading === -1 && nextProps.user !== null) {
      this.props.getPosts();
      
    }
  }
  
  render() {

    const {userLoading, postsLoading, children} = this.props;
    console.log(children);
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
    postsLoading: state.loading.posts,
    userlistLoading: state.loading.userlist
  }
}

export default withRouter(connect(mapStateToProps, {getUser, getPosts, getUserList})(Loading));