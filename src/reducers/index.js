'use strict'

import {combineReducers} from 'redux-immutable';
import languageReducer from './languageReducer';
import testReducer from './testReducer';
import settingsReducer from './settingsReducer';
// Combine all
const appReducer = combineReducers({
  languageReducer,
  testReducer,
  settingsReducer
})

export default appReducer
