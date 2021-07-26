import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';

const Title = styled.div`
  margin-top: 50px;

  text-transform: capitalize;
  font-size: 60px;
`;

const Search = () => {
  const [titleData, setTitleData] = useState({});

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const title = query.get('title');

  useEffect(() => {
    const searchTitle = async () => {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:5000/api/v1/search',
        params: {
          title: title,
        },
      });

      setTitleData(response.data);
    };

    setTitleData({});
    searchTitle();
    console.log(titleData);
  }, []);

  return (
    <div>
      <Title>{title}</Title>
      <div>{titleData.Year}</div>
      <div>{titleData.Rated}</div>
      <div>{titleData.Runtime}</div>
      <br />
    </div>
  );
};

export default Search;
