import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';

import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist-immutable';
import immutableTransform from 'redux-persist-transform-immutable';
import Immutable, { Iterable } from 'immutable';
import AppReducer from '../reducers/'
import thunk from 'redux-thunk';
import initialState from '../reducers/initialState'

export default function configureStore() {
  const persistConfig = {
    transforms: [immutableTransform()],
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userReducer','languageReducer' ],
    blacklist: [],
  };
  const middleware = [thunk];
  const enhancers = [];


  const stateTransformer = state => {
    if (Iterable.isIterable(state)) return state.toJS();
    else return state;
    // return state;
  };

  if (__DEV__) {
    middleware.push(
      createLogger({
        stateTransformer,
      }),
    );
  }

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(AppReducer ,  compose(...enhancers));


  persistStore(store, {
    ...persistConfig,
  });
  return store;
}
