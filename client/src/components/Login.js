import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authTrue } from '../redux/authSlice';
import Register from './Signup';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f1f1f1;
  padding: 100px 10px 0 10px;
  height: 100vh;
`;

const Card = styled.div`
  max-width: 400px;
  background-color: white;
  margin: 0 auto;
  padding: 80px 40px 80px 40px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px lightgray;
`;

const Title = styled.h1`
  text-align: center;
  color: seagreen;
  font-size: 36px;
  font-weight: 700;
`;

const FormContainer = styled.div`
  margin: 30px auto 0 auto;
`;

const Input = styled.input`
  display: block;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 10px;

  &:focus {
    outline: none;
    border: 1px solid #b4b4b4;
  }
`;

const Submit = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: dodgerblue;
  color: white;
  width: 100%;
  display: block;
  margin: 0 auto;
  font-size: 15px;

  &:hover {
    cursor: pointer;
    background-color: #005fbe;
  }
`;

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SignUpLink = styled.a`
  text-decoration: none;
  color: dodgerblue;
  margin: 0 auto;
`;

const Login = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  return (
    <Container>
      <Card>
        <Title>movielist</Title>
        <FormContainer>
          <form>
            <Input type='email' placeholder='Email' />
            <Input type='password' placeholder='Password' />
            <Submit>Log in</Submit>
          </form>
        </FormContainer>
        <SignUpContainer>
          <SignUpLink href='/'> Sign up</SignUpLink>
        </SignUpContainer>
      </Card>
    </Container>
  );
};

export default Login;
