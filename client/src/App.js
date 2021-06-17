import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Login from "./components/Login";
import Home from "./components/Home";

import { authTrue, authFalse } from "./redux/authSlice";

import "./App.scss";

const App = () => {
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  return (
    <Router>
      {/*  <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(authTrue())}
        >
          Login
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(authFalse())}
        >
          Logout
        </button>
      </div> */}
      <div className="">
        <Switch>
          <Route exact path="/search"></Route>
          <Route path="/">
            {auth ? <Home /> : <Login />} <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
