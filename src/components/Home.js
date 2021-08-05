import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authFalse } from '../redux/authSlice';
import styled from 'styled-components';
import axios from 'axios';

import { breakpoints, Button, Input } from '../Theme';

const { sm, md, lg } = breakpoints;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 50px;

  ${breakpoints.md} {
    padding-top: 30px;
  }
`;

const PageTitle = styled.h2``;

const MovieEntry = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Poster = styled.img``;

const Content = styled.div`
  width: 300px;
`;

const Info = styled.div``;

const Title = styled.div`
  font-size: 20px;
  margin: 0 20px;
`;

const Year = styled.div`
  font-size: 20px;
  margin: 0 20px;
  color: ${({ theme }) => theme.secondaryText};
`;

const Buttons = styled.div``;

const Delete = styled(Button)`
  margin: 10px 20px;
`;

const Summary = styled.div`
  font-size: 14px;
  margin: 0 20px;
  display: none;
  flex: 1;
  ${breakpoints.md} {
    display: block;
  }
`;

const Genre = styled.div`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 50px;
  border: solid 1px white;
`;

const Plot = styled.div`
  font-size: 14px;
  margin: 10px 0;
`;

const Home = () => {
  const url =
    process.env.REACT_APP_LOCAL_URL || 'https://movielist88.herokuapp.com';

  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `${url}/api/v1/movies`,
          headers: { token: localStorage.token },
        });

        response.data.sort((a, b) => {
          let fa = a.title.toLowerCase(),
            fb = b.title.toLowerCase();
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });

        setMovies(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    getInfo();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios({
        method: 'delete',
        url: `${url}/api/v1/movies`,
        headers: { token: localStorage.token },
        data: {
          imdb_id: id,
        },
      });

      const newMovies = movies.filter((movie) => {
        if (id !== movie.imdb_id) {
          return true;
        }
      });

      setMovies(newMovies);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <Container>
      {/* <div>{email}</div> */}
      <PageTitle>My Movies</PageTitle>
      {movies
        ? movies.map((movie) => {
            return (
              <MovieEntry key={movie.id}>
                <Link to={`/search?title=${movie.title}`}>
                  <Poster
                    style={{ height: '120px' }}
                    src={movie.poster}
                    alt=''
                  />
                </Link>
                <Content>
                  <Info>
                    <Title>{movie.title}</Title>
                    <Year>({movie.year})</Year>
                  </Info>
                  <Buttons>
                    <Delete onClick={() => handleDelete(movie.imdb_id)}>
                      Delete
                    </Delete>
                  </Buttons>
                </Content>
                <Summary>
                  <Genre>{movie.genre}</Genre>
                  <Plot>{movie.plot}</Plot>
                </Summary>
              </MovieEntry>
            );
          })
        : null}
    </Container>
  );
};

export default Home;
