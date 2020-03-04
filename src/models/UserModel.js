
export default class UserModel {
  constructor(data = {}, initModel = true) {
    if (initModel) {
      this.init(data);
    }
  }

  init(data) {
    if (!data) return;
    this.id = data.id || '';
    this.email = data.email || '';
    this.fullName = data.full_name || data.fullName ||  this.email   ?  this.email.substring(0, this.email.lastIndexOf("@")) :  '';
    this.avatar = data.avatar_path || data.avatar || '';
    this.birthday = data.birthday || '';
    this.gender = data.gender || '';

  }
}
