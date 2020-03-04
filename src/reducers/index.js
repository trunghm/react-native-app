'use strict'

import { combineReducers } from 'redux';
import userReducer from './userReducer'
import languageReducer from './languageReducer'
// import {combineReducers} from 'redux-immutable';
import testReducer from './testReducer';
// Combine all
const appReducer = combineReducers({
  languageReducer,
  userReducer,
  testReducer
})

export default appReducer
