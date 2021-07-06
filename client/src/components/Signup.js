import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authTrue } from '../redux/authSlice';
import Signup from './Signup';
import styled from 'styled-components';
import axios from 'axios';

import { breakpoints, Button, Input } from '../Theme';

const { sm, md, lg } = breakpoints;

const Container = styled.div`
  padding: 100px 10px 0 10px;
  ${md} {
    padding-top: 160px;
  }
`;

const Title = styled.h1``;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const CreateText = styled.div`
  text-align: center;
  font-weight: 200;
  font-size: 24px;

  ${sm} {
    font-size: 30px;
  }
  ${md} {
    font-size: 48px;
  }
`;

const EmailInput = styled(Input)`
  padding: 15px;
  width: 100%;
  font-size: 20px;
`;

const PasswordInput = styled(Input)`
  padding: 15px;
  width: 100%;
  font-size: 20px;
`;

const SignupButton = styled(Button)`
  padding: 15px;
  width: 100%;
`;

const ErrorContainer = styled.div`
  text-align: center;
  color: red;
  font-size: 14px;
`;

const Login = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const [errorMessages, setErrorMessages] = useState();

  const { email, password } = input;

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:5000/auth/signup',
        data: {
          email,
          password,
        },
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        dispatch(authTrue());
      }
    } catch (error) {
      const { errors } = error.response.data;
      setErrorMessages(errors);
    }
  };

  return (
    <Container>
      <FormContainer>
        <CreateText>Create a new account</CreateText>
        <form>
          <EmailInput
            type='email'
            name='email'
            placeholder='Email'
            onChange={onChange}
          />
          <ErrorContainer>
            {errorMessages
              ? errorMessages.map((errorMessage, index) => {
                  if (errorMessage.param === 'email') {
                    return <div key={index + 'email'}>{errorMessage.msg}</div>;
                  }
                })
              : null}
          </ErrorContainer>
          <PasswordInput
            type='password'
            name='password'
            placeholder='Password'
            onChange={onChange}
          />
          <ErrorContainer>
            {errorMessages
              ? errorMessages.map((errorMessage, index) => {
                  if (errorMessage.param === 'password') {
                    return (
                      <div key={index + 'password'}>{errorMessage.msg}</div>
                    );
                  }
                })
              : null}
          </ErrorContainer>
          <SignupButton onClick={onSubmit}>Sign up</SignupButton>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Login;
