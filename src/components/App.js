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


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Loading>
          <div>
            
              <Switch>
                <Route exact path="/login" component={Login}/>
                <Auth>
                  <Header/>
                  <Route exact path="/" component={PostList}/>
                  <Route exact path="/:id" component={PostDetails}/>
                  <Route exact path="/:id/editPost" component={EditPost}/>
                  {/* <Route exact path="/:id/editComment" component={EditComment}/> */}
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