'use strict';

// import * as AWS from 'aws-sdk';

export default class TestStore {

  constructor(config) {
    this.db = config.db
  }

  tableNames() {
    this.db.listTables((err, data) => {
      console.log(data.TableNames);
    });
  }

  checkHealth() {
    // this.tableNames();
    return 'ok';
  }
}