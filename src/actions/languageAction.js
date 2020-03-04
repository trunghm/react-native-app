import actionTypes from '../constant/actionType'

export function changeLanguage (language) {
  return function (dispatch) {
    return  (
        dispatch({
          type: actionTypes.CHANGE_LANGUAGE,
          ...{language: language}
        })
    );
  }
}
