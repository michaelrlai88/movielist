import React from "react";
import { useDispatch } from "react-redux";
import { authTrue } from "../redux/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className="loginPage row">
      <div className="col-lg-6 bg-light">
        <h1 className="text-center mt-5 text-primary">movielist</h1>
      </div>
      <div className="col-lg-6">
        <div className="loginCard card text-dark bg-light mb-3 mx-auto mt-5 shadow bg-white">
          <div className="card-body">
            <p className="card-text">
              <form>
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                />
                <div className="d-grid">
                  <button className="btn btn-success py-2">Log In</button>
                </div>
              </form>
              <p className="text-center my-3">or</p>
              <div className="d-grid">
                <button className="btn btn-primary py-2 col-7 mx-auto">
                  Create New Account
                </button>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
