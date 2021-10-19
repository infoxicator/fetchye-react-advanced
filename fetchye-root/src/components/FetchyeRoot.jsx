import React from 'react';
import { RenderModule, composeModules } from 'holocron';
import { combineReducers } from 'redux-immutable';
import { OneFetchyeProvider, OneCache } from 'fetchye-one-app';
import { Helmet } from 'react-helmet';
import childRoutes from '../childRoutes';

const FetchyeRoot = () => (
  <React.Fragment>
    <Helmet
      title="React Advanced"
      meta={[{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]}
      link={[{
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css',
        integrity: 'sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU',
        crossorigin: 'anonymous',
      },
      ]}
    />
    <OneFetchyeProvider>
      <div>
        <div className="m-5">
          <RenderModule moduleName="fetchye-user" />
        </div>
        <RenderModule moduleName="fetchye-films" />
      </div>
    </OneFetchyeProvider>
  </React.Fragment>
);

FetchyeRoot.childRoutes = childRoutes;

const loadModuleData = async ({ store }) => {
  const { dispatch } = store;
  await dispatch(composeModules([
    { name: 'fetchye-user' },
    { name: 'fetchye-films' }]));
};

FetchyeRoot.holocron = {
  name: 'fetchye-root',
  loadModuleData,
  reducer: combineReducers({
    fetchye: OneCache().reducer,
  }),
};

if (!global.BROWSER) {
  // eslint-disable-next-line global-require
  FetchyeRoot.appConfig = require('../appConfig').default;
}

export default FetchyeRoot;
