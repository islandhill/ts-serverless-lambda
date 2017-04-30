'use strict'

export default class HealthController {

  constructor(partnersStore) {
    this.partnersStore = partnersStore;
  }

  check() {
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: this.partnersStore.checkHealth()
      }),
    };
  }


}