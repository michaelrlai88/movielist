import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { authFalse } from '../redux/authSlice';
import { breakpoints, Button, Input, SecondaryButton } from '../Theme';

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

  form {
    display: flex;
    padding: 0 0 10px 0;

    ${md} {
      display: none;
    }
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

  form {
    flex: 1;
    display: none;

    ${md} {
      display: flex;
      padding: 0 0;
    }
  }
`;

const Logo = styled.h1`
  font-size: 30px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.logo};
  }

  ${md} {
    font-size: 30px;
  }
`;

const Search = styled(Input)`
  margin: 0 0 0 0;
  padding: 5px;
  flex: 1;
  border-radius: 3px 0 0 3px;

  ${md} {
    margin: 0 0 0 20px;
    padding: 5px;
    flex: 1;
    border-radius: 3px 0 0 3px;
  }
`;

const SearchSubmit = styled(SecondaryButton)`
  margin: 0 0 0 0;
  padding: 5px 10px;
  border-radius: 0 3px 3px 0;

  ${md} {
    margin: 0 20px 0 0;
    padding: 5px 10px;
    border-radius: 0 3px 3px 0;
  }
`;

const Links = styled.div`
  display: flex;

  a {
    margin: 0 0 0 0;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
`;

const Login = styled.div`
  margin-right: 20px;
  a:hover {
    color: ${({ theme }) => theme.logo};
  }
`;

const Signup = styled.div`
  a:hover {
    color: ${({ theme }) => theme.logo};
  }
`;

const Logout = styled.div`
  margin: auto;

  a:hover {
    color: ${({ theme }) => theme.logo};
  }
`;

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
        <form>
          <Search placeholder='Search' />
          <SearchSubmit>
            <i class='fas fa-search'></i>
          </SearchSubmit>
        </form>
        <Links>
          {auth ? (
            <>
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
      <form>
        <Search placeholder='Search' />
        <SearchSubmit>
          <i class='fas fa-search'></i>
        </SearchSubmit>
      </form>
    </Container>
  );
};

export default Nav;
