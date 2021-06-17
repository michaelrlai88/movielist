import React, { useState } from 'react';

const Register = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-primary py-2 col-7 mx-auto'
        data-bs-toggle='modal'
        data-bs-target='#staticBackdrop'
      >
        Create New Account
      </button>

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
                />
                <input
                  name='password'
                  type='password'
                  className='form-control mb-3 bg-gray'
                  placeholder='Password'
                  onChange={handleChange}
                />
                <div className='d-grid'>
                  <button
                    type='button'
                    className='btn btn-primary py-2'
                    //data-bs-dismiss='modal'
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
    </>
  );
};

export default Register;
