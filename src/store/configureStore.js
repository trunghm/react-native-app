import { createStore, applyMiddleware, compose } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { createLogger } from 'redux-logger';
import { persistStore ,persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
// import { persistStore } from 'redux-persist-immutable';
// import immutableTransform from 'redux-persist-transform-immutable';
import Immutable, { Iterable } from 'immutable';
import AppReducer from '../reducers/'
import thunk from 'redux-thunk';
import initialState from  '../reducers/initialState';


export default function configureStore() {
  const persistConfig = {
    // transforms: [immutableTransform()],
    key: 'root',

    storage: AsyncStorage,
    // whitelist: ['userReducer','languageReducer' ],
    // blacklist: [],
  };
  const middleware = [thunk];
  const enhancers = [];


  const stateTransformer = state => {
    // if (Iterable.isIterable(state)) return state.toJS();
    // else return state;
    return state;
  };

  if (__DEV__) {
    middleware.push(
      createLogger({
        stateTransformer,
      }),
    );
  }

  enhancers.push(applyMiddleware(...middleware) );
  // const initialState = Immutable.Map();
  const persistedReducer = persistReducer(persistConfig, AppReducer);
  // const store = createStore(persistedReducer)
  // const store = createStore(AppReducer ,  compose(...enhancers));
  const store = createStore(persistedReducer ,  compose(...enhancers));

  let persistor = persistStore(store);
  return {store,persistor};
}
