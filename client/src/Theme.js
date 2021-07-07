import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
  sm: '@media only screen and (min-width: 320px)',
  md: '@media only screen and (min-width: 768px)',
  lg: '@media only screen and (min-width: 992px)',
};

export const darkTheme = {
  body: '#080a14',
  text: 'white',
  secondaryText: 'grey',
  buttonText: 'white',
  error: '#c00000',
  input: '#1a242c',
  inputFocus: '#22303a',
  inputPlaceholder: '#778ea3',

  logo: '#2b6eff',
  nav: '#030405',

  primary: '#112bbd',
  primaryDark: '#0d2194',

  secondary: '#c75a00',
  secondaryDark: '#974400',
};

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 16px;

    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 10px 25px;
  border-radius: 3px;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.buttonText};
  margin-top: 20px;
  border: 1px solid ${({ theme }) => theme.primary};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.primaryDark};
    border: 1px solid ${({ theme }) => theme.primaryDark};
  }
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};
  display: block;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.input};
  margin-top: 20px;

  ${(props) => (props.error ? `border: 1px solid ${props.theme.error}` : null)};

  &:focus {
    background-color: ${({ theme }) => theme.inputFocus};
    border: 1px solid ${({ theme }) => theme.inputFocus};
    ${(props) =>
      props.error ? `border: 1px solid ${props.theme.error}` : null};
  }

  ::placeholder {
    color: ${({ theme }) => theme.inputPlaceholder};
  }
`;
