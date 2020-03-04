import {fromJS} from 'immutable'

export default {


  language:   fromJS({
    name: 'vi',
  }),
  test: fromJS({
    fetching: false,
    success: false,
    errorMsg: null,
    data: null,
  })
}
