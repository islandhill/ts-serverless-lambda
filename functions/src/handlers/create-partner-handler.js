const uuidV4 = require('uuid/v4');
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
  const id = uuidV4();
  const now = Date.now();
  const data = JSON.parse(event.body);

  const params = {
    TableName: 'partners',
    Item: {
      id: id,
      firstName: data.firstName,
      lastName: data.lastName,
      createdAt: now,
      updatedAt: now,
    },
  };

  dynamoDb.put(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({message: "Couldn't create the partner."})
      });
      return;
    }

    const response = {
      statusCode: 201,
      body: JSON.stringify({ id: id }),
    };
    callback(null, response);
  });
};
