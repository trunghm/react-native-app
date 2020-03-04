'use strict'

import { combineReducers } from 'redux-immutable';
import userReducer from './userReducer'
import languageReducer from './languageReducer'
// Combine all
const appReducer = combineReducers({
  userReducer,
  languageReducer
})

export default appReducer
