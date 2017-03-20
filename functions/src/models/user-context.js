'use strict';

export default class UserContext {

  constructor(region, businessId, authToken) {
    this.region = region;
    this.businessId = businessId;
    this.authToken = authToken;
  }

  getRegion() {
    return this.region;
  }

  getBusinessId() {
    return this.businessId;
  }

  getAuthToken() {
    return this.authToken;
  }

  toJson() {
    return {
      region: this.region,
      businessId: this.businessId
    }
  }


}