'use strict'

import {combineReducers} from 'redux-immutable';
import languageReducer from './languageReducer';
import testReducer from './testReducer';
// Combine all
const appReducer = combineReducers({
  languageReducer,
  testReducer
})

export default appReducer
