import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { Button, breakpoints } from '../Theme';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 50px;

  ${breakpoints.md} {
    padding-top: 30px;
  }
`;

const ErrorResults = styled.div``;

const TitleResults = styled.div``;

const Title = styled.div`
  text-transform: capitalize;
  font-size: 60px;
  text-align: center;

  ${breakpoints.md} {
    text-align: left;
  }
`;

const Rating = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.secondaryText};
  font-size: 14px;

  ${breakpoints.md} {
    text-align: left;
  }
`;

const PosterInfoContainer = styled.div`
  margin-top: 20px;

  ${breakpoints.md} {
    display: flex;
  }
`;

const Poster = styled.div`
  text-align: center;

  img {
    width: 300px;
    object-fit: cover;
  }
`;

const Info = styled.div`
  margin-left: 20px;
`;

const First = styled.div`
  display: flex;

  ${breakpoints.sm} {
    flex-direction: column-reverse;
  }

  ${breakpoints.md} {
    justify-content: space-between;
    flex-direction: row;
  }
`;

const FirstInfo = styled.div`
  display: flex;
  margin-top: 20px;

  div {
    padding: 3px 10px;
    border-radius: 3px;
    margin-right: 10px;
    background-color: ${({ theme }) => theme.input};
  }

  ${breakpoints.md} {
    margin-top: 0;
  }
`;

const AddMovie = styled.div``;

const AddMovieButton = styled(Button)`
  display: block;
  margin-top: 20px;
  padding: 5px 10px;

  ${breakpoints.md} {
    margin-top: 0;
  }
`;

const Second = styled.div`
  div {
    margin-top: 20px;
  }
`;

const Genre = styled.div`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 50px;
  border: solid 1px white;
`;

const Loading = styled.div``;

const Search = () => {
  const auth = useSelector((state) => state.auth.auth);

  const [titleData, setTitleData] = useState({});

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const title = query.get('title');
  const id = query.get('id');

  useEffect(() => {
    const searchTitle = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: 'http://localhost:5000/api/v1/search',
          params: {
            title: title,
            id: id,
          },
        });
        setTitleData(response.data);
      } catch (error) {}
    };
    setTitleData({});
    searchTitle();
  }, [title]);

  return (
    <Container>
      {titleData.Error ? (
        <ErrorResults>Movie not found</ErrorResults>
      ) : titleData.Title ? (
        <TitleResults>
          <Title>{titleData.Title}</Title>
          <Rating>
            IMDb Rating: {titleData.imdbRating} ({titleData.imdbVotes})
          </Rating>
          <PosterInfoContainer>
            <Poster>
              <img src={titleData.Poster} alt='' />
            </Poster>
            <Info>
              <First>
                <FirstInfo>
                  <div>{titleData.Year}</div>
                  <div>{titleData.Rated}</div>
                  <div>{titleData.Runtime}</div>
                </FirstInfo>
                {auth ? (
                  <AddMovie>
                    <AddMovieButton>+ My Movies</AddMovieButton>
                  </AddMovie>
                ) : null}
              </First>
              <Second>
                <Genre>{titleData.Genre}</Genre>
                <div>{titleData.Plot}</div>
                <div>Director: {titleData.Director}</div>
                <div>Actors: {titleData.Actors}</div>
              </Second>
            </Info>
          </PosterInfoContainer>
        </TitleResults>
      ) : (
        <Loading>Loading results</Loading>
      )}
    </Container>
  );
};

export default Search;
