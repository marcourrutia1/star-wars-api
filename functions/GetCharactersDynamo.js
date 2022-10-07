const controller = require("../libs/controller.lib");
module.exports.getCharactersDynamo = async (event, context) => {
  try {
    const result = await controller.listCharacters();
    return {
      statusCode: 200,
      headers: {
        Accept: "application/json",
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
