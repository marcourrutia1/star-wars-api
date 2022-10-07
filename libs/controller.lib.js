const axios = require("axios");
const helper = require("../helpers/helper");
const CharacterDB = require("../models/CharactersDB.model");
const callPeopleStarWars = async (pagina) => {
  try {
    pagina = pagina <= 0 ? 1 : !pagina ? 1 : pagina;
    const { data } = await axios.get(
      `${process.env.API_URL}/people/?page=${pagina}`
    );
    return helper.translateArrayofObject(data.results || []);
  } catch (error) {
    throw new Error("Error al llamar al api Starwars");
  }
};

const callAnyApiStarWars = async (root, id, pagina) => {
  let url = `${process.env.API_URL}/${root}/`;
  let isOneObject = false;
  if (!helper.validateRoots(root)) {
    throw new Error("Root no disponible en el api");
  }
  if (id) {
    if (id != 0) {
      url += `${id}/`;
      isOneObject = true;
    }
  } else {
    url += `?page=${pagina || 1}`;
  }
  try {
    const { data } = await axios.get(url);
    let result;
    if (isOneObject) {
      result = helper.translateObject(data || {});
    } else {
      result = helper.translateArrayofObject(data.results || []);
    }
    return result;
  } catch (error) {
    throw new Error("Error al llamar al api Starwars");
  }
};

const createCharacter = async (character) => {
  try {
    helper.validateCharacterObject(character);
    return await CharacterDB.create(character);
  } catch (error) {
    throw new Error(error.message);
  }
};

const listCharacters = async () => {
  try {
    const characters = await CharacterDB.scan().all().exec();
    if (characters.count == 0) throw new Error("No hay personajes");
    return characters;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  callPeopleStarWars,
  callAnyApiStarWars,
  createCharacter,
  listCharacters,
};
