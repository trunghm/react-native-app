import actionTypes from '../constant/actionType'
import InitialState from './initialState'

export default function languageReducer (state = InitialState.language, action) {
  switch (action.type) {
    case actionTypes.CHANGE_LANGUAGE:
      return {...state,name:action.language}

    default:
      return state
  }
}
