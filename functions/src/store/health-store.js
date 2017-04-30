'use strict';

// import AWS from 'aws-sdk';
import AWS from 'aws-sdk/dist/aws-sdk';
export default class PartnersStore {

  constructor(config) {
    this.db = config.db || new AWS.DynamoDB.DocumentClient();
  }

  checkHealth() {
    return 'ok';
  }
}