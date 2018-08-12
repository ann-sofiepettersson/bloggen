import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import User from '../components/User';
import { getUserList, deleteUser } from '../actions/handleUserActions';

class UserList extends Component {

  // componentDidMount() {
  //   this.props.getUserList();
  // }
  
  
  renderUsers = () => {
    return _.map(this.props.userlist, (list, key, arr) => {
      console.log(arr.displayName);
      console.log(list);
      return (
      <User key={key}>
        <div >
          <div className="col-sm-4" > 
            {list.email} 
          </div>
          <div className="col-sm-4" > 
            {list.userType}
          </div>
          <div className="col-sm-4">
            <button className="btn btn-xs edit-post-btn">
              <Link to={`/userList/${key}/editUser`}>Ändra</Link>
            </button>
            <button className="btn btn-xs delete-btn pull-right" 
                  onClick={() => this.props.deleteUser(key)}>Ta bort
            </button>
          </div>
        </div>
      </User>
      )
    })
  }
  
  render() {
    
    return (
      <div className="container">
        <h4>Användare</h4>
        <div className="back-btn">
          <button className="btn btn-green">
            <Link to={`/userList/addUser`}> Lägg till användare</Link>
          </button>
        </div>
        <div className="user-list">
          {this.renderUsers()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userlist: state.userlist
  }
}

export default connect(mapStateToProps, {getUserList, deleteUser})(UserList);