import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import film from '../assets/film.jpg';

import { breakpoints, Button, Input } from '../Theme';

const { sm, md, lg } = breakpoints;

const Container = styled.div``;

const Content = styled.div``;

const Banner = styled.div`
  ${lg} {
    display: flex;
  }
`;

const BannerText = styled.div`
  padding: 50px 0 50px 0;

  ${lg} {
    padding: 150px 50px 0 0;
    width: 50%;
  }
`;

const Text = styled.h2`
  font-weight: 400;
  font-size: 30px;
`;

const TryButton = styled(Button)``;

const BannerImageContainer = styled.div`
  ${lg} {
    width: 50%;
  }
`;

const BannerImage = styled.img`
  position: absolute;
  left: 0;
  width: 100%;

  ${lg} {
    position: initial;
    width: 100%;
    height: 800px;
    object-fit: cover;
    object-position: 30%;
  }
`;

const Landing = () => {
  return (
    <Container>
      <Content>
        <Banner>
          <BannerText>
            <Text>Watch movies now, save the rest for later</Text>
            <Link to='/signup'>
              <TryButton>Try it now</TryButton>
            </Link>
          </BannerText>
          <BannerImageContainer>
            <BannerImage src={film} alt='' />
          </BannerImageContainer>
        </Banner>
      </Content>
    </Container>
  );
};

export default Landing;
