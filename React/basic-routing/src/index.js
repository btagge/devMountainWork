import React from 'react';
import ReactDOM from 'react-dom';
import {  Router, Route, browserHistory } from 'react-router';
import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import CreateNew from './components/CreateNew';
import './index.css';


ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={App}>
      <Route path='home' component={Home}/>
      <Route path='login' component={Login}/>
      <Route path='new-location' component={CreateNew}/>
    </Route>
  </Router>,

  document.getElementById('root')
);