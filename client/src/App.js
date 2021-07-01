import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

import { authTrue, authFalse } from './redux/authSlice';

import './App.css';

const App = () => {
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  return (
    <Router>
      <div className=''>
        <Switch>
          <Route exact path='/search'></Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route path='/'>
            {auth ? <Home /> : <Login />} <Redirect to='/' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
