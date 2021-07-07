import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authFalse } from '../redux/authSlice';
import styled from 'styled-components';
import axios from 'axios';

import { breakpoints, Button, Input } from '../Theme';

const { sm, md, lg } = breakpoints;

const Container = styled.div``;

const LogoutButton = styled(Button)``;

const Home = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const logOut = (e) => {
    dispatch(authFalse());
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: 'http://localhost:5000/api/v1',
          headers: { token: localStorage.token },
        });

        const { email } = response.data;
        setEmail(email);
      } catch (error) {
        console.log(error.message);
      }
    };

    getInfo();
  });

  return (
    <Container>
      <div>{email}</div>
      <h2>Your movies</h2>
    </Container>
  );
};

export default Home;
