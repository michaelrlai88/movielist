import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authTrue } from '../redux/authSlice';
import styled from 'styled-components';
import axios from 'axios';

import { breakpoints, colors, Button, Input } from '../Theme';

const { sm, md, lg } = breakpoints;
const { darkgrey, darkteal, teal } = colors;

const Container = styled.div`
  ${md} {
    padding: 100px 0 0 0;
  }
`;

const FormContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding: 60px 30px 60px 30px;
  ${md} {
    border: 1px solid lightgrey;
  }
`;

const Logo = styled.h1`
  text-align: center;
  color: ${teal};
  margin-bottom: 30px;
`;

const LoginText = styled.div`
  text-align: center;
  color: ${darkgrey};
  margin-bottom: 20px;
`;

const EmailInput = styled(Input)`
  margin-top: 20px;
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
  color: ${darkgrey};
  font-size: 12px;
  margin-top: 20px;
`;

const SignupButton = styled(Button)`
  width: 100%;
  background-color: white;
  color: ${teal};
  border: 1px solid ${teal};

  &:hover {
    color: white;
    border: 1px solid ${darkteal};
  }
`;

const Login = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const { email, password } = input;

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5000/auth/login',
      data: {
        email,
        password,
      },
    });

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      dispatch(authTrue());
    }

    try {
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <FormContainer>
        <Logo>movielist</Logo>
        <LoginText>Log in</LoginText>
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
