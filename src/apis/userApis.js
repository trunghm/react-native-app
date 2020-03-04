import BaseApi from './baseApi';

class UserAPI extends BaseApi {
  getMemberPreferences (email) {
    const endpoint = this.Urls.user.getMemberPreferences.replace('{email}', email)
    return super.execute(this.Methods.GET, endpoint, {userId: email}, null).then((res) => {
      return res
    })
  }
  getUserDetail({ userId}) {
    const endpoint = this.Urls.USER_DETAILS;
    return super.execute(this.Methods.GET, endpoint,null , {userId: userId});

  }
}
export default new UserAPI()
