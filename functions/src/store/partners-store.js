'use strict';

//import AWS from 'aws-sdk';

export default class PartnersStore {

  constructor(config) {
    //this.db = config.db || new AWS.DynamoDB.DocumentClient();
  }

  checkHealth() {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'all good'
      })
    };
  }
}