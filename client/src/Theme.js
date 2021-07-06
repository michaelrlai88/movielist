import styled from 'styled-components';

export const breakpoints = {
  sm: '@media only screen and (min-width: 320px)',
  md: '@media only screen and (min-width: 768px)',
  lg: '@media only screen and (min-width: 992px)',
};

export const colors = {
  darkgrey: '#737373',
  darkteal: '#146858',
  teal: '#1e9c84',
};

export const Button = styled.button`
  font-size: 16px;
  padding: 5px 25px;
  border-radius: none;
  border: none;
  background-color: #1e9c84;
  color: white;
  margin-top: 20px;
  border: 1px solid #1e9c84;

  &:hover {
    cursor: pointer;
    background-color: #146858;
    border: 1px solid #146858;
  }
`;

export const Input = styled.input`
  display: block;
  padding: 5px;
  font-size: 16px;
  outline: none;
  border-radius: none;
  border: 1px solid lightgrey;
  margin-top: 20px;

  ${(props) => (props.error ? 'border: 1px solid red' : null)};

  &:focus {
    border: 1px solid #1e9c84;
    ${(props) => (props.error ? 'border: 1px solid red' : null)};
  }
`;
