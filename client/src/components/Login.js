import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authTrue } from '../redux/authSlice';
import Register from './Register';

const Login = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <h1 className='loginTitle text-center mt-5 mb-3 text-success'>
        movielist
      </h1>
      <div className='loginCard card border-light text-dark bg-light mb-3 mx-auto shadow bg-white'>
        <div className='card-body'>
          <p className='card-text'>
            <form>
              <input
                type='email'
                className='form-control mb-3'
                placeholder='Email'
              />
              <input
                type='password'
                className='form-control mb-3'
                placeholder='Password'
              />
              <div className='d-grid'>
                <button className='btn btn-success py-2'>Log In</button>
              </div>
            </form>
            <hr className='my-3' />
            <div className='d-grid'>
              <Register />
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
