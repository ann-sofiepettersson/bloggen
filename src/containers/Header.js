import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getUser, logout } from '../actions/userActions';
import { getAdminUsers } from '../actions/handleUserActions';
import AdminUser from '../components/AdminUser';

class Header extends Component {

  state = { open: false }

  handleClick = () => {
    const { currentState } = this.state;
    this.setState({ open: !currentState });
  }

  handleUsers = () => { 
    return _.map(this.props.adminuser, (admin, k) => {
      const loggedInUser = this.props.user.uid;

      return (
        <AdminUser key={k}>
          {loggedInUser === admin.userId &&  admin.userType === "Admin" ? (
            <Link to="/userList" >Hantera användare</Link>
          ) : null } 
        </AdminUser>
      );
    });
  }
    
  
  render() {

    const { open } = this.state;
    return (
      <div className="bg-image">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#blogNav" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="user-name-small">{this.props.user.displayName === null ? this.props.user.email : this.props.user.displayName}</span>
                <i onClick={this.handleClick} className={open ? "fa fa-caret-up" : "fa fa-caret-down"} aria-hidden="true"></i>
              </button>
            </div>
            
            <div className="collapse navbar-collapse" id="blogNav">
              <ul className="nav navbar-nav navbar-right">
              {this.handleUsers()}
                
                <li className="user-name">
                  <span className="user" >{this.props.user.displayName === null ? this.props.user.email : this.props.user.displayName}</span>
                </li>
                {this.props.user === null ? (
                  <li>
                    <Link to="/login">Logga in </Link>
                  </li>
                ) : (
                  <li className="pull-right">
                    <Link to="/login" onClick={() => this.props.logout()}>Logga ut </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <Link className="navbar-brand logo" to="/">Bloggen</Link>
      </div>
    );
  }
};

function mapStateToProps(state){
  return {
    user: state.user,
    adminuser: state.adminuser
  }
}

export default connect(mapStateToProps, {getUser, logout, getAdminUsers})(Header);