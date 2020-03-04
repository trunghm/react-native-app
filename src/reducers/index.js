'use strict'

import { combineReducers } from 'redux';
import userReducer from './userReducer'
import languageReducer from './languageReducer'
// Combine all
const appReducer = combineReducers({
  userReducer,
  languageReducer
})

export default appReducer
