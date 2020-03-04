import actionTypes from '../actions/actionType'
import InitialState from './initialState'

export default function testReducer(state = InitialState.test, action) {
  switch (action.type) {
    case actionTypes.TEST_ACTION_PENDING:
      return {success: false, fetching: true};
    case actionTypes.TEST_ACTION_SUCCESS:
      return {success: true, fetching: false, data: action.payload.testData};
    case actionTypes.TEST_ACTION_FAIL:
      return {success: false, fetching: false, errorMsg: action.message};
    default:
      return state
  }
}
