import userApis from '../apis/userApis'
import UserModel from '../models/UserModel'

export function getUserDetail({  userId }) {
  return userApis.getUserDetail({  userId }).then(res => {
    if (res.error === null) {
      res.data = new UserModel(res.resultSuccess.data.data);
    }else{
      throw res;
    }

    return res;
  })
}
