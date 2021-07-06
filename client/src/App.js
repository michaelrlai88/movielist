import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import Nav from './components/Nav';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

import { authTrue, authFalse } from './redux/authSlice';

import './App.css';

import { breakpoints, colors, Button, Input } from './Theme';

const { sm, md, lg } = breakpoints;
const { darkgrey, teal } = colors;

const Container = styled.div`
  padding: 0px 10px 0 10px;

  ${md} {
    padding: 0px 30px 0 30px;
  }

  ${lg} {
    padding: 0px 60px 0 60px;
  }
`;

const Content = styled.div`
  ${lg} {
    margin: 0 auto;
    max-width: 1200px;
  }
`;

const RoutesContent = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const App = () => {
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuth = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: 'http://localhost:5000/auth/check',
          headers: { token: localStorage.token },
        });

        response.data ? dispatch(authTrue()) : dispatch(authFalse());
      } catch (error) {
        console.log(error.message);
      }
    };

    isAuth();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/login'>
          {auth ? <Redirect to='/' /> : <Login />}
        </Route>
        <Route>
          <Nav />
          <Container>
            <Content>
              <Route exact path='/signup'>
                {auth ? <Redirect to='/' /> : <Signup />}
              </Route>
              <Route exact path='/search'></Route>
              <Route exact path='/'>
                {auth ? <Home /> : <Landing />}
              </Route>
            </Content>
          </Container>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
