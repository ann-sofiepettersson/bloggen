import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, logout } from '../actions/userActions';

class Header extends Component {

  render() {
    
    return (
      <div className="bg-image">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#blogNav" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="user-name-small">{this.props.user.displayName === null ? this.props.user.email : this.props.user.displayName}</span>
              </button>
            </div>
            
            <div className="collapse navbar-collapse" id="blogNav">
              <ul className="nav navbar-nav navbar-right">
                <li className="user-list">
                  {/* <Link to="/users" >Hantera användare</Link> */}
                </li>
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
    user: state.user
  }
}

export default connect(mapStateToProps, {getUser, logout})(Header);