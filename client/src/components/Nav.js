import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { authFalse } from '../redux/authSlice';
import { breakpoints, colors, Button, Input } from '../Theme';

const { sm, md, lg } = breakpoints;
const { darkgrey, teal } = colors;

const Container = styled.div`
  padding: 0px 10px 0 10px;

  background-color: white;
  border-bottom: 1px solid lightgrey;

  ${md} {
    padding: 0 30px;
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
    max-width: 1200px;
  }
`;

const Logo = styled.h1`
  a {
    text-decoration: none;
    color: ${teal};
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
    color: ${darkgrey};
  }
`;

const Login = styled.div`
  a:hover {
    color: ${teal};
  }
`;

const Signup = styled.div`
  a:hover {
    color: ${teal};
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
