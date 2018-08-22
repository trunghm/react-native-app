'use strict'

import {combineReducers} from 'redux'
import connection from './connection'
import userReducer from './user-reducer'
import NavigationReducer from './navigationReducer'
// Combine all
const appReducer = combineReducers({
  NavigationReducer,
  connection,
  userReducer
})

export default appReducer
