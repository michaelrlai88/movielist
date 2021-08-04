import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authTrue } from '../redux/authSlice';
import styled from 'styled-components';
import axios from 'axios';

import { theme, breakpoints, Button, Input } from '../Theme';

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

  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.buttonText};
  border: 1px solid ${({ theme }) => theme.secondary};

  &:hover {
    border: 1px solid ${({ theme }) => theme.secondaryDark};
    background-color: ${({ theme }) => theme.secondaryDark};
  }
`;

const ErrorContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.error};
  font-size: 14px;
`;

const Signup = () => {
  const url =
    process.env.REACT_APP_LOCAL_URL || 'https://movielist88.herokuapp.com';

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const [emailError, setEmailError] = useState('');

  const [passwordError, setPasswordError] = useState('');

  const { email, password } = input;

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setEmailError();
    setPasswordError();

    try {
      console.log(url);

      const response = await axios({
        method: 'post',
        url: `${url}/auth/signup`,
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
      console.log(errors);

      errors.forEach((err) => {
        if (err.param === 'email' || err.param === 'duplicate') {
          setEmailError(err.msg);
        }
        if (err.param === 'password') {
          setPasswordError(err.msg);
        }
      });
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
            error={emailError}
          />
          <ErrorContainer>{emailError}</ErrorContainer>
          <PasswordInput
            type='password'
            name='password'
            placeholder='Password'
            onChange={onChange}
            error={passwordError}
          />
          <ErrorContainer>{passwordError}</ErrorContainer>
          <SignupButton onClick={onSubmit}>Sign up</SignupButton>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Signup;
