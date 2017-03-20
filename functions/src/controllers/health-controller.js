'use strict'

export default class HealthController {

  constructor(partnersStore) {
    this.partnersStore = partnersStore;
  }

  get() {
    return this.partnersStore.checkHealth();
  }


}