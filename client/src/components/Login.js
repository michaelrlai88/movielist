import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authTrue } from '../redux/authSlice';
import Register from './Signup';

const Login = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  return (
    <div className='container mt-5'>
      <div className='loginCard card border-light text-dark bg-light mx-auto shadow bg-white px-4 pt-5 pb-5'>
        <div className='pt-4'></div>
        <h1 className='loginTitle text-center mb-3 text-success'>movielist</h1>
        <div className='card-body'>
          <div className='card-text'>
            <form>
              <input
                type='email'
                className='form-control mb-3'
                placeholder='Email'
              />
              <input
                type='password'
                className='form-control mb-5'
                placeholder='Password'
              />
              <div className='d-grid'>
                <button className='btn btn-success py-1 mb-5'>Log in</button>
              </div>
            </form>

            <div className='text-center'>
              <span>
                Don't have an account?{' '}
                <Link to='/signup' className='signup'>
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
