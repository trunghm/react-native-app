export default class UserAuth {
  constructor(data={}, initModel = true){
    if(initModel) {
      this.init(data);
    }
  }

  init(data) {
    this.passportId = data.passportId;
    this.firstName = data.firstName;
    this.lastName =  data.lastName;
    this.entityTypeId = data.entityTypeId || "";
    this.entityType = data.entityType || "";
    this.entityId = parseInt(data.entityId) || "";
    this.entityName = data.entityName || "";
    this.teamId = data.teamId?parseInt(data.teamId) : 0;
    this.teamName = data.teamName || "";
    this.cludId = data.cludId || "";
    this.clubName = data.clubName || "";
    this.compId = data.compId || "";
    this.compName = data.compName || "";
    this.assocId = data.assocId || "";
    this.assocName = data.assocName || "";
    this.sportName = data.sportName || "";
    this.sportsId = data.sportsId || "";
  }
}
