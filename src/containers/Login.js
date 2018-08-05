import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin, emailLogin, emailSignup } from './../actions/userActions';
import ErrorAlert from '../components/ErrorAlert';

class Login extends Component {

  state = {
    email: '',
    password: '',
    loginError: '',
    signupError: ''
  }
  
  componentWillMount() {
    if (this.props.user !== null) {
      this.props.history.push('/');
    }
  }

  
  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      console.log(nextProps.history);
      nextProps.history.push('/');
    }
  }

  login(e) {
    e.preventDefault();
    this.props.emailLogin(this.state.email, this.state.password).catch(err => {
      this.setState({loginError: err});
    });
  }

  signUp(e) {
    e.preventDefault();
    this.props.emailSignup(this.state.email, this.state.password).catch(err => {
      this.setState({signupError: err.message});
    })
  }
  
  
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-12 login-header">
            <h1>BLOGGEN | {new Date().getFullYear()}</h1>
          </div>
          
          <div className="col-sm-12 login-text">
            <h4><b className="login-b">Logga in</b> eller <b className="signup-b">Registrera dig</b> med e-post och lösenord!</h4>
          </div>
            {/* LOGIN */}
            <div className="col-sm-6">
              <form>
                <div className="form-group">
                  <input 
                    className="form-control" 
                    placeholder="E-post"
                    type="email" 
                    name="email" 
                    onChange={e => this.setState({email: e.target.value})} />
                </div>
                <div className="form-group">
                  <input 
                    className="form-control" 
                    placeholder="Lösenord"
                    type="password" 
                    name="password" 
                    onChange={e => this.setState({password: e.target.value})} />
                </div>
                {this.state.loginError && <ErrorAlert>Your username/password is incorrect</ErrorAlert>}
                

                <div className="form-group">
                  <button 
                    className="btn btn-lg login-btn pull-left" 
                    onClick={(e) => {this.login(e);}}
                    >Logga in</button>
                </div>   
              </form>
            </div>

            {/* SIGNUP */}
            <div className="col-sm-6 email-signup-box">
              <form>
                <div className="form-group">
                  <input 
                    className="form-control" 
                    placeholder="E-post"
                    type="email" 
                    name="email" 
                    onChange={e => this.setState({email: e.target.value})} />
                </div>
                <div className="form-group">
                  <input 
                    className="form-control" 
                    placeholder="Lösenord"
                    type="password" 
                    name="password" 
                    onChange={e => this.setState({password: e.target.value})} />
                </div>
                {this.state.signupError && <ErrorAlert>{this.state.signupError}</ErrorAlert>}
                <div className="form-group">
                  <button 
                    className="btn btn-lg signup-btn pull-right" 
                    onClick={(e) => {this.signUp(e);}}
                    >Registrera</button>
                </div>  
              </form>
            </div>
          
          
          <div className="col-sm-12 social-media">
            <button 
              className="btn btn-danger btn-lg google-btn" 
              onClick={this.props.googleLogin}>Logga in med Google</button>
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { googleLogin, emailLogin, emailSignup })(Login);