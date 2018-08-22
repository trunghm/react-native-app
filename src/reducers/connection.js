import actionTypes from '../constant/action-type';
import InitialState from './initialState';
import constants from '../constant/constant';

export default function connectionReducer(state = InitialState.connection, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CONNECTION_STATUS:
      const isConnected = action.status.type !== constants.CONNECTION_TYPE.NONE
      return {...state, isConnected}
    default:
      return state
  }
}
