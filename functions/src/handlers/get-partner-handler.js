const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = (event, context, callback) => {
  const params = {
    TableName: 'partners',
    Key: {
      id: event.pathParameters.id,
    },
  };

  dynamoDb.get(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({message: "Couldn't fetch the partner."})
      });
      return;
    }

    const item = result.Item;

    if (item) {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          id: item.id,
          firstName: item.firstName,
          lastName: item.lastName,
          createdAt: new Date(item.createdAt).toISOString(),
          updatedAt: new Date(item.updatedAt).toISOString()
        }),
      };

      return callback(null, response);
    }

    callback(null, {
      statusCode: 404,
      body: JSON.stringify({message: 'Resource not found'})
    });
  });
};
