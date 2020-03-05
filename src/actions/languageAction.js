import actionTypes from './actionType'

export function changeLanguage(language) {
  return function (dispatch) {
    return (
      dispatch({
        type: actionTypes.CHANGE_LANGUAGE, payload: {language}
      })
    );
  }
}
