import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authFalse } from '../redux/authSlice';
import styled from 'styled-components';
import axios from 'axios';

import { breakpoints, Button, Input } from '../Theme';

const { sm, md, lg } = breakpoints;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 50px;

  ${breakpoints.md} {
    padding-top: 30px;
  }
`;

const PageTitle = styled.h2``;

const MovieEntry = styled.div``;

const Poster = styled.img``;

const Content = styled.div``;

const Info = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 20px;
  margin: 0 20px;
`;

const Year = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.secondaryText};
`;

const Buttons = styled.div``;

const Delete = styled(Button)`
  margin: 10px 20px;
`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: 'http://localhost:5000/api/v1/movies',
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

        console.log(response.data);
        setMovies(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    getInfo();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await axios({
        method: 'delete',
        url: 'http://localhost:5000/api/v1/movies',
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
      console.log(newMovies);
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
              <MovieEntry
                key={movie.id}
                style={{ display: 'flex', marginBottom: '30px' }}
              >
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
              </MovieEntry>
            );
          })
        : null}
    </Container>
  );
};

export default Home;
