const controller = require("../libs/controller.lib");
module.exports.createCharacterDynamo = async (event, context) => {
  try {
    const jsonBody = JSON.parse(event.body);
    const result = await controller.createCharacter(jsonBody);
    return {
      statusCode: 200,
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify(result),
      isBase64Encoded: false,
    };
  } catch (error) {
    let response = {
      statusCode: 400,
      body: error.message,
      headers: {
        "Content-Type": "application/json",
      },
    };
    context.succeed(response);
  }
};
