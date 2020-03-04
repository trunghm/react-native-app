import * as userServices from '../services/userServices'
import actionTypes from '../constant/actionType'
import {_} from 'lodash'

export function getUserDetail ({userId}) {
  return function (dispatch) {
    return userServices.getUserDetail({userId}).then((response) => {
      if (response.error === null) {
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          ...{user: response.data, success: true}
        })
      } else {
        dispatch({
          type: actionTypes.LOGIN_FAILED,
          ...{user: {},  success: false}
        })
      }
      return response
    }).catch(error =>{
      console.log('------error-----',error);
      throw error;
    });
  }
}
