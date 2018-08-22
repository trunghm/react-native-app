import BaseApi from './base-api';

class UserAPI extends BaseApi {
  getMemberPreferences(email) {
    const endpoint = this.Urls.user.getMemberPreferences.replace("{email}", email);
    return super.execute(this.Methods.GET, endpoint, {userId: email}, null, null).then((res) => {
      return res;
    });
  }
}
export default new UserAPI();
