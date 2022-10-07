const util = require("../utils/util");
const translateObject = (object) => {
  const keysItem = Object.keys(object);
  let obj = {};
  keysItem.forEach((key) => {
    let replaceValue = util.keysTranslate.find(
      (value) => value.defaultKey === key
    );
    if (replaceValue) {
      obj[replaceValue.modifiedKey] = object[key];
    }
  });
  return obj;
};

const translateArrayofObject = (object) => {
  let responseTranslated = [];
  for (const item of object) {
    responseTranslated.push(translateObject(item));
  }
  return responseTranslated;
};

const validateRoots = (root) => {
  const findRoot = util.roots.find((item) => item == root);
  let result = true;
  if (!findRoot) result = false;
  return result;
};

const validateCharacterObject = (object) => {
  let keysObject = Object.keys(object);
  util.keysCharacterObject.forEach((keyCharacter) => {
    let findKey = keysObject.find((item) => keyCharacter == item);
    if (!findKey) throw new Error(`Falta el campo ${keyCharacter}`);
  });
};
module.exports = {
  translateObject,
  translateArrayofObject,
  validateRoots,
  validateCharacterObject,
};
