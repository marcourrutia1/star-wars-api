const dynamoose = require("dynamoose");

const ConfigConnection = () => {
  dynamoose.aws.sdk.config.update({
    accessKeyId: process.env.DYNAMO_ACCESS_KEY_ID,
    secretAccessKey: process.env.DYNAMO_SECRET_KEY,
    region: process.env.DYNAMO_REGION,
  });
};

module.exports = {
  ConfigConnection,
};
