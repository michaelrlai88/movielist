import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authTrue } from '../redux/authSlice';
import styled from 'styled-components';
import axios from 'axios';

import { breakpoints, Button, Input } from '../Theme';

const { sm, md, lg } = breakpoints;

const Container = styled.div`
  ${md} {
    padding: 100px 0 0 0;
  }
`;

const FormContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 60px 50px 60px 50px;
  ${md} {
  }
`;

const Logo = styled.h1`
  text-align: center;
  margin-bottom: 30px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.logo};
  }
`;

const LoginText = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 20px;
`;

const ErrorContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.error};
  font-size: 14px;
`;

const EmailInput = styled(Input)`
  margin-top: 35px;
  width: 100%;
`;

const PasswordInput = styled(Input)`
  width: 100%;
`;

const LoginButton = styled(Button)`
  width: 100%;
`;

const Or = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.secondaryText};
  font-size: 12px;
  margin-top: 35px;
`;

const SignupButton = styled(Button)`
  margin-top: 35px;
  width: 100%;
  background-color: ${({ theme }) => theme.secondary};

  border: 1px solid ${({ theme }) => theme.secondary};

  &:hover {
    border: 1px solid ${({ theme }) => theme.secondaryDark};
    background-color: ${({ theme }) => theme.secondaryDark};
  }
`;

const Login = () => {
  const url =
    process.env.REACT_APP_LOCAL_URL || 'https://movielist88.herokuapp.com';

  const dispatch = useDispatch();
  const history = useHistory();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const [loginError, setLoginError] = useState('');

  const { email, password } = input;

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: 'post',
        url: `${url}/auth/login`,
        data: {
          email,
          password,
        },
      });

      console.log(response.data);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        dispatch(authTrue());
        history.goBack();
      }
    } catch (error) {
      setLoginError(error.response.data);
    }
  };

  return (
    <Container>
      <FormContainer>
        <Logo>
          <Link to='/'>movielist</Link>
        </Logo>
        <LoginText>Log in</LoginText>
        <ErrorContainer>{loginError}</ErrorContainer>
        <form>
          <EmailInput
            type='email'
            name='email'
            placeholder='Email'
            onChange={onChange}
          />
          <PasswordInput
            type='password'
            name='password'
            placeholder='Password'
            onChange={onChange}
          />
          <LoginButton onClick={onSubmit}>Log in</LoginButton>
        </form>
        <Or>Don't have an account?</Or>
        <Link to='/signup'>
          <SignupButton>Sign up</SignupButton>
        </Link>
      </FormContainer>
    </Container>
  );
};

export default Login;
