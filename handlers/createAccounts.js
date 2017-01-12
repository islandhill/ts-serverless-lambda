module.exports.createAccounts = (event, context, callback) => {
  console.log(JSON.stringify(event));
  const records = event.Records;
  records.forEach((record) => {
    const object = record.dynamodb.NewImage;
    const firstName = object.firstName.S;
    const lastName = object.lastName.S;
    if (record.eventName === "INSERT") {
      console.log(record.eventName, firstName, lastName);
    }
  });
}
