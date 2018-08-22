import actionTypes from '../constant/action-type'
import InitialState from './initialState'

export default function userReducer (state = InitialState.user, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return state.merge({...action.user, message: action.message, success: action.success})
    case actionTypes.LOGIN_FAILED:
      return state.merge({...action.user, message: action.message, success: action.success})
    default:
      return state
  }
}
