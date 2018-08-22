import * as userServices from '../services/user-services'
import actionTypes from '../constant/action-type'
import {_} from 'lodash'

export function login (userName, password) {
  return function (dispatch) {
    return userServices.login(userName, password).then((response) => {
      if (response.success) {
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          ...{user: response.data, message: response.message, success: response.success}
        })
      } else {
        dispatch({
          type: actionTypes.LOGIN_FAILED,
          ...{user: response.data, message: response.message, success: response.success}
        })
      }
      return response
    })
  }
}
