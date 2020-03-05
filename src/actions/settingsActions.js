import * as testServices from '../services/testServices';
import actionTypes from './actionType';
import {ERROR_MSG} from "../apis/response";
import {_} from 'lodash'

export function changeTheme({theme}) {
  return function (dispatch) {
    dispatch({
      type: actionTypes.CHANGE_THEME,
      payload:{theme}
    });
  }
}

