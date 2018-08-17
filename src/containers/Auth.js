import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAdminUsers } from '../actions/handleUserActions';


class Auth extends Component {

  componentWillMount() {
    this.props.getAdminUsers();
  }
  

  componentDidUpdate() {
    const { userLoading, user } = this.props;
    if (userLoading === false && !user) {
      this.props.history.push('/login');
    }
  }

  
  render() {
    const {  user, userLoading, children} = this.props;
    return (userLoading === false && user) ? <div>{children}</div> : null;
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    userLoading: state.loading.user,
    adminuser: state.adminuser
  }
}

export default withRouter(connect(mapStateToProps, {getAdminUsers})(Auth));