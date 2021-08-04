import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { authFalse } from '../redux/authSlice';
import { breakpoints, Button, Input, SecondaryButton } from '../Theme';

const { sm, md, lg } = breakpoints;

const OuterContainer = styled.div`
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
  margin: 0 auto;
  max-width: 1200px;

  ${lg} {
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
    margin: 0 0 0 30px;
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
    margin: 0 30px 0 0;
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

const MyMovies = styled.div`
  margin-right: 20px;
  a:hover {
    color: ${({ theme }) => theme.logo};
  }
`;

const Logout = styled.div`
  a:hover {
    color: ${({ theme }) => theme.logo};
  }
`;

const Nav = () => {
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const [searchInput, setSearchInput] = useState('');

  const logOut = (e) => {
    dispatch(authFalse());
    localStorage.removeItem('token');
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (searchInput !== '') {
      history.push(`/search?title=${searchInput}`);
      setSearchInput('');
    }
  };

  return (
    <OuterContainer>
      <Content>
        <Logo>
          <Link to='/'>movielist</Link>
        </Logo>
        <form>
          <Search
            placeholder='Search'
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          <SearchSubmit onClick={handleClick}>
            <i className='fas fa-search'></i>
          </SearchSubmit>
        </form>
        <Links>
          {auth ? (
            <>
              <MyMovies>
                <Link to='/'>My Movies</Link>
              </MyMovies>
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
        <Search
          placeholder='Search'
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <SearchSubmit onClick={handleClick}>
          <i className='fas fa-search'></i>
        </SearchSubmit>
      </form>
    </OuterContainer>
  );
};

export default Nav;
