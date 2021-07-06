import React from 'react';
import styled from 'styled-components';

import { breakpoints, colors, Button, Input } from '../Theme';

const { sm, md, lg } = breakpoints;
const { darkgrey, darkteal, teal } = colors;

const Container = styled.div`
  h2 {
    font-weight: 400;
  }
`;

const Content = styled.div`
  margin-top: 50px;

  ${md} {
    margin: 100px;
  }
  ${lg} {
    margin: 200px;
  }
`;

const Landing = () => {
  return (
    <Container>
      <Content>
        <h2>Watch movies now, save the rest for later</h2>
      </Content>
    </Container>
  );
};

export default Landing;
