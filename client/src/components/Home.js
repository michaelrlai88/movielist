import React from "react";
import { useDispatch } from "react-redux";
import { authFalse } from "../redux/authSlice";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home page</h1>
      <button className="btn btn-danger" onClick={() => dispatch(authFalse())}>
        Login
      </button>
    </div>
  );
};

export default Home;
