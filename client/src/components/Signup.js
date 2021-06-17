import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import auth from '../api/auth';

const Signup = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const clearInput = () => {
    setInput({
      email: '',
      password: '',
    });
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await auth({
        method: 'post',
        url: '/auth/register',
        data: {
          email: input.email,
          password: input.password,
        },
      });
      clearInput();
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log(error.message);
    }
  };

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
                <button className='btn btn-primary py-1 mb-5'>Sign up</button>
              </div>
            </form>

            <div className='text-center'>
              <span>
                <Link to='/' className='signup'>
                  Log in
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    /*     <>
      <div data-bs-toggle='modal' data-bs-target='#staticBackdrop'>
        Create New Account
      </div>

      <div
        className='modal'
        id='staticBackdrop'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabindex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered registerWidth'>
          <div className='modal-content shadow border-light'>
            <div id='loginModalHeader' className='modal-header border-white'>
              <h5 className='modal-title' id='staticBackdropLabel'>
                Sign Up
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={clearInput}
              ></button>
            </div>
            <div className='modal-body'>
              <form>
                <input
                  name='email'
                  type='email'
                  className='form-control mb-3'
                  placeholder='Email'
                  onChange={handleChange}
                  value={input.email}
                />
                <input
                  name='password'
                  type='password'
                  className='form-control mb-3 bg-gray'
                  placeholder='Password'
                  onChange={handleChange}
                  value={input.password}
                />
                <div className='d-grid'>
                  <button
                    type='button'
                    className='btn btn-primary py-2'
                    data-bs-dismiss='modal'
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </> */
  );
};

export default Signup;
