import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { breakpoints, Button, Input } from '../Theme';

const { sm, md, lg } = breakpoints;

const Container = styled.div``;

const Content = styled.div``;

const Banner = styled.div``;

const BannerText = styled.div`
  padding: 100px 30px 100px 0;

  ${lg} {
    padding: 200px 50px 0 0;
  }
`;

const Text = styled.h2`
  font-weight: 400;
  font-size: 30px;
`;

const TryButton = styled(Button)`
  margin-top: 50px;
`;

const BannerImageContainer = styled.div``;

const BannerImage = styled.div``;

const Landing = () => {
  return (
    <Container>
      <Content>
        <Banner>
          <BannerText>
            <Text>Watch movies now, save some for later</Text>
            <Link to='/signup'>
              <TryButton>Try it now</TryButton>
            </Link>
          </BannerText>
          {/*           <BannerImageContainer>
            <BannerImage />
          </BannerImageContainer> */}
        </Banner>
      </Content>
    </Container>
  );
};

export default Landing;
