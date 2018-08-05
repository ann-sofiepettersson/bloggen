import React, { Component } from 'react';

// import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUserList, editUserType } from '../actions/userActions';

class EditUser extends Component {

  state = {
    email: this.props.userList.email,
    userType: this.props.userList.userType
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
    this.props.history.push('/users');
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
                <textarea
                  onChange={this.handleChange}
                  value={this.state.userType}
                  type="text"
                  name="userType"
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

function mapStateToProps(state, ownProps){
  return {
    users: state.users[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {getUserList, editUserType})(EditUser);