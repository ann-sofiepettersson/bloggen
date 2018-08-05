import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { getUserList, editUserType } from '../actions/userActions';
import User from '../components/User';

class UserList extends Component {

  state = {
    userType: [
      {value: false, label: "Superadmin"},
      {value: false, label: "Admin"},
      {value: false, label: "Standard"}
    ] 
  }

  // getUserTypes = (types) => {
  //   const filteredTypes = types.map((type, index) => {
  //     return type ? index === 0 ? 
  //   })
  // }

  // renderCheckboxes = () => (
  //   _.map(this.state.userType, (checkbox, index) => (
  //     <label key={index} htmlFor={`checkbox-${index}`}>
  //       {checkbox.label}
  //       <input id={`checkbox-${index}`}
  //             className="checkbox"
  //             name={`checkbox-${index}`} 
  //             type="radio" 
  //             value={checkbox.value} 
  //             onChange={(e) => this.toggleCheckbox(e, index)} 
  //             checked={checkbox.value}
  //              />
  //     </label>
  //   ))
  // )

  toggleCheckbox = (e, index) => {
    e.preventDefault();
    console.log(e.target.checked, e.target.name);
    
     let userTypes = this.state.userType.slice();
     userTypes[index].value = !userTypes[index].value;
     console.log(userTypes.value);
     this.setState({
       userType: userTypes
     })
   }

  renderUsers() {
    return _.map(this.props.userList, (u, key) => {
      console.log(u);
      console.log(u.userType);

      return (
        <User key={key} >
        <div >
          <div className="col-33" > {u.email} </div> 
          {/* <li > {u.userId} </li> */}
          <div className="col-33" > 
            {/* <label className="admin-label" htmlFor={`${u.userId}`}>Admin
            <input
                id={`${u.userId}`} 
                name={`${u.userId}`}
                type="checkbox"
                // checked={u.adminUser}
                value={u.adminUser}
                onChange={(e) => this.toggleCheckbox(e, key)} /> 
            </label>
      */}
            {u.userType}
          </div>
          <div className="col-33">
            <button className="btn btn-xs edit-user-btn ">
              <Link to={`/users/${key}/editUser`}>Ändra</Link>
            </button>
          </div>
        </div>
      </User>
      )
      
    });
  };



  // updateUser = () => {
    
  //   const user = {
      
  //     adminUser: this.state.adminUser
      
  //   };
  //   console.log(user);
  //   this.props.editUser(this.props.match.params.id, user);
  //   console.log(user);
  //   this.props.update('/users:id');
  // }
  
  render() {

    
    return (
      <div className="container">
        <h4>Användare</h4>
        <div>
          {this.renderUsers()}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    userList: state.userList
  }
}

export default connect(mapStateToProps, {getUserList, editUserType})(UserList);