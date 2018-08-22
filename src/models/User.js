import UserAuth from "./UserAuth";
import {_} from "lodash";


export default class User {
  constructor(data = {}, initModel = true) {
    if (initModel) {
      this.init(data);
    }
  }

  init(data) {
    this.playerId = data.playerId || data.passportId || 0;
    this.isVerified = data.isVerified || false;
    this.loggingEmail = data.loggingEmail || '';
    this.name = `${data.firstName} ${data.lastName}` || '';
    this.lastName = data.lastName || '';
    this.firstName = data.firstName || '';
    this.address = data.address || '';
    this.phone = data.phone || '';
    this.agePlayer = data.agePlayer || 0;
    this.emails = data.emails || [];
    this.avatar = data.avatar || '';
    this.userAuth = _.sortBy((data.userAuth || []).map(auth => new UserAuth({...auth, firstName: data.firstName, lastName: data.lastName, passportId: data.passportId})), ['entityName']);
    this.dob = data.dob || "";
  }
}
