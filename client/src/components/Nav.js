import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { authFalse } from '../redux/authSlice';
import { breakpoints, Button, Input } from '../Theme';

const { sm, md, lg } = breakpoints;

const Container = styled.div`
  position: sticky;
  top: 0;

  padding: 0px 20px 0 20px;

  background-color: ${({ theme }) => theme.nav};

  ${md} {
    padding: 0 40px;
  }

  ${lg} {
    padding: 0 60px;
  }
`;

const Content = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${lg} {
    margin: 0 auto;
    max-width: 1350px;
  }
`;

const Logo = styled.h1`
  font-size: 20px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.logo};
  }

  ${md} {
    font-size: 30px;
  }
`;

const Links = styled.div`
  display: flex;

  a {
    margin: 0 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
`;

const Login = styled.div`
  a:hover {
    color: ${({ theme }) => theme.logo};
  }
`;

const Signup = styled.div`
  a:hover {
    color: ${({ theme }) => theme.logo};
  }
`;

const Search = styled.div`
  margin: 0 0px;
`;

const Logout = styled.div``;

const Nav = () => {
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  const logOut = (e) => {
    dispatch(authFalse());
    localStorage.removeItem('token');
  };

  return (
    <Container>
      <Content>
        <Logo>
          <Link to='/'>movielist</Link>
        </Logo>
        <Links>
          {auth ? (
            <>
              <Search>
                <Link to='/search'>Search</Link>
              </Search>
              <Logout>
                <Link to='/' onClick={logOut}>
                  Log out
                </Link>
              </Logout>
            </>
          ) : (
            <>
              <Login>
                <Link to='/login'>Log in</Link>
              </Login>
              <Signup>
                <Link to='/signup'>Sign up</Link>
              </Signup>
            </>
          )}
        </Links>
      </Content>
    </Container>
  );
};

export default Nav;
