'use strict';

export const helloHandler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hey Serverless!',
      input: event,
    }),
  };

  printContext(context);
  callback(null, response);

};

const printContext = (context) => {
  //if(context) {
  //  console.log('remaining time =', context.getRemainingTimeInMillis());
  //  console.log('functionName =', context.functionName);
  //  console.log('AWSrequestID =', context.awsRequestId);
  //  console.log('logGroupName =', context.logGroupName);
  //  console.log('logStreamName =', context.logStreamName);
  //  console.log('clientContext =', context.clientContext);
  //}
}
