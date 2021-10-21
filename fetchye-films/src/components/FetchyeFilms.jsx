import React from 'react';
import { useFetchye } from 'fetchye';
import { composeModules, RenderModule } from 'holocron';
import { makeOneServerFetchye } from 'fetchye-one-app';
import Films from './Films';
import Outline from './Outline';
import Loading from './Loading';

const LOCAL_IP = '192.168.3.106';

const FetchyeFilms = () => {
  const { isLoading, data } = useFetchye(`http://${LOCAL_IP}:8000/films`);
  return (
    <div className="container">
      <Outline name="Films Micro-Frontend">
        <div className="m-3">
          <RenderModule moduleName="fetchye-user" />
        </div>
        <h1 className="text-center">Films</h1>
        {isLoading ? <Loading /> : <Films data={data?.body?.results} />}
      </Outline>
    </div>
  );
};

const loadModuleData = async ({ store, fetchClient }) => {
  const { dispatch } = store;
  await dispatch(composeModules([{ name: 'fetchye-user ' }]));

  if (global.BROWSER) { return; }

  const fetchye = makeOneServerFetchye({ store, fetchClient });

  console.log(`http://${LOCAL_IP}:8000/films`);
  await Promise.all([
    fetchye(`http://${LOCAL_IP}:8000/films`),
    fetchye(`http://${LOCAL_IP}:8000/user`),
  ]);
};

FetchyeFilms.holocron = {
  name: 'fetchye-films',
  loadModuleData,
};

export default FetchyeFilms;
