'use strict'

export default class HealthController {

  constructor(testStore) {
    this.testStore = testStore;
  }

  check() {
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: this.testStore.checkHealth()
      }),
    };
  }


}