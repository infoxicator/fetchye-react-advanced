import React from 'react';
import { useFetchye } from 'fetchye';
import Outline from './Outline';
import Loading from './Loading';

const FetchyeUser = () => {
  const { isLoading, data } = useFetchye('https://swapi.dev/api/people/1');
  const { isLoading: isLoadingFilms, data: filmsData } = useFetchye('https://swapi.dev/api/films');
  return (
    <div className="container my-2">
      <Outline name="User Micro-Frontend" color="danger">
        <h1>Current User:</h1>
        { isLoading ? (
          <Loading />
        ) : <h3>{data?.body?.name}</h3>}
        { isLoadingFilms ? (
          <Loading />
        ) : <p>Number of Films: {filmsData?.body?.results?.length}</p>}
      </Outline>
    </div>
  );
};

export default FetchyeUser;
