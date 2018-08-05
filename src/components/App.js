import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './../css/style.css';
import Header from '../containers/Header';
import PostList from '../containers/PostList';
import Login from '../containers/Login';
import Loading from '../containers/Loading';
import Auth from '../containers/Auth';
import PostDetails from '../containers/PostDetails';
import EditPost from '../containers/EditPost';
import Footer from './Footer';
// import UserList from './../containers/UserList';
// import EditUser from './../containers/EditUser';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Loading>
          <div className="mainContainer">
            <Switch>
              <Route exact path="/login" component={Login}/>
              <Auth>
                <Header/>
                <Route exact path="/" component={PostList}/>
                {/* <Route exact path="/userList" component={UserList}/> */}
                {/* <Route exact path="/users:id/editUser" component={EditUser}/> */}
                <Route exact path="/:id" component={PostDetails}/>
                <Route exact path="/:id/editPost" component={EditPost}/>
                
              </Auth>
            </Switch>
            <Footer/>
          </div>
        </Loading>
      </BrowserRouter>
    );
  }
}

export default App;