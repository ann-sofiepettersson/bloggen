import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { emailSignup } from './../actions/userActions';


class AddUser extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.emailSignup(this.state.email, this.state.password)
    // .catch(err => {
    //   this.setState({signupError: err.message});
    // })
    this.props.history.push('/userList');
  }

  render() {
    
    return (
      <div className="container">
        <div className="add-user-section">
          <div className="col-sm-12">
            <Link className="back-btn" to="/userlist"> &#171; Tillbaka</Link>
            <form className="add-form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input 
                  className="form-control no-border"
                  type="text" 
                  name="email" 
                  placeholder="Email" 
                  onChange={e => this.setState({email: e.target.value})}
                  required />
              </div>
              <div className="form-group">
                <input
                  className="form-control no-border"
                  type="password"
                  name="password"
                  placeholder="Lösenord"
                  onChange={e => this.setState({password: e.target.value})}
                  required />
              </div>
              <div className="form-group">
                <button className="btn col-sm-12 btn-green" >Spara användare</button>
              </div>
            </form>
          </div>
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

export default connect(mapStateToProps, {emailSignup})(AddUser);