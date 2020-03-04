'use strict'

import { combineReducers } from 'redux';
import languageReducer from './languageReducer'
// import {combineReducers} from 'redux-immutable';
import testReducer from './testReducer';
// Combine all
const appReducer = combineReducers({
  languageReducer,
  testReducer
})

export default appReducer
