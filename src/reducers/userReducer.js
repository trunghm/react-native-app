import actionTypes from '../actions/actionType'
import InitialState from './initialState'

export default function userReducer (state = InitialState.user, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {...action.user, success: action.success}
    case actionTypes.LOGIN_FAILED:
      return {...action.user, success: action.success}
    default:
      return state
  }
}
