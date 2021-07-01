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

  return <div></div>;
};

export default Signup;
