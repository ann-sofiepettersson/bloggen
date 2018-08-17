import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUserList, editUser } from '../actions/handleUserActions';

class EditUser extends Component {

  state = {
    email: this.props.userlist.email,
    userType: this.props.userlist.userType
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      userType: this.state.userType
      
    };
    this.props.editUser(this.props.match.params.id, user);
    console.log(user);
    this.setState({
      email: '',
      userType: ''
    });
    this.props.history('/userList');
  }

  render() {
    
    return (
      <div>
        <div className="edit-post-section">
          <div className="col-sm-12">
            <Link className="back-btn" to="/"> &#171; Tillbaka</Link>
            <form className="edit-form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input 
                  value={this.state.email}
                  className="form-control post-title no-border"
                  type="text" 
                  name="email" 
                  placeholder="Title" 
                  onChange={this.handleChange}
                  required />
              </div>
              <div className="form-group">
              <select
                  onChange={this.handleChange}
                  value={this.state.userType}
                  // type="text"
                  name="userType"
                  // placeholder="Typ av användare"
                  className="form-control no-border"
                  required >
                  <option value="Standard">Standard</option>
                  <option value="Admin">Admin</option>
                  
                  </select>
              </div>
              <div className="form-group">
                <button className="btn col-sm-12 btn-green" >Spara ändring</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  
  return {
    userlist: state.userlist[ownProps.match.params.id]
  }  
}

export default connect(mapStateToProps, {getUserList, editUser})(EditUser);