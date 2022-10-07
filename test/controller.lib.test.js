const DynamoDB = require("../connection/dynamoDB");
const controller = require("../libs/controller.lib");
const _ = require("lodash");
const helper = require("../utils/util");
require("dotenv").config();
DynamoDB.ConfigConnection();

const objectCharacter = {
  id: 5,
  nombre: "Princesa Leia",
  altura: 18,
  masa: 20,
  color_cabello: "marron",
  color_piel: "blanca",
  color_ojos: "marron",
  año_nacimiento: "15CD",
  genero: "mujer",
  peliculas: [
    {
      titulo: "The Phantom Menace",
      director: "George Lucas",
    },
  ],
};

describe("callPeopleStarWars", () => {
  it("Se llama correctamente al api de People Starwars", async () => {
    const response = await controller.callPeopleStarWars(1);
    expect(response).not.toBeNull();
    expect(typeof response).toBe("object");
    for (const character of response) {
      expect(character).toHaveProperty("nombre");
      expect(character).toHaveProperty("altura");
      expect(character).toHaveProperty("masa");
      expect(character).toHaveProperty("color_cabello");
      expect(character).toHaveProperty("color_piel");
      expect(character).toHaveProperty("color_ojos");
      expect(character).toHaveProperty("año_nacimiento");
      expect(character).toHaveProperty("genero");
      expect(character).toHaveProperty("mundo_natal");
      expect(character).toHaveProperty("peliculas");
      expect(character).toHaveProperty("especies");
      expect(character).toHaveProperty("vehiculos");
      expect(character).toHaveProperty("naves_estelares");
      expect(character).toHaveProperty("fecha_creacion");
      expect(character).toHaveProperty("fecha_edicion");
      expect(character).toHaveProperty("url");

      expect(character.nombre).not.toBeNull();
      expect(typeof character.nombre).toBe("string");

      expect(character.altura).not.toBeNull();
      expect(typeof character.altura).toBe("string");

      expect(character.masa).not.toBeNull();
      expect(typeof character.masa).toBe("string");

      expect(character.color_cabello).not.toBeNull();
      expect(typeof character.color_cabello).toBe("string");

      expect(character.color_piel).not.toBeNull();
      expect(typeof character.color_piel).toBe("string");

      expect(character.color_ojos).not.toBeNull();
      expect(typeof character.color_ojos).toBe("string");

      expect(character.año_nacimiento).not.toBeNull();
      expect(typeof character.año_nacimiento).toBe("string");

      expect(character.genero).not.toBeNull();
      expect(typeof character.genero).toBe("string");

      expect(character.mundo_natal).not.toBeNull();
      expect(typeof character.mundo_natal).toBe("string");

      expect(character.peliculas).not.toBeNull();
      expect(typeof character.peliculas).toBe("object");

      expect(character.especies).not.toBeNull();
      expect(typeof character.especies).toBe("object");

      expect(character.vehiculos).not.toBeNull();
      expect(typeof character.vehiculos).toBe("object");

      expect(character.naves_estelares).not.toBeNull();
      expect(typeof character.naves_estelares).toBe("object");

      expect(character.fecha_creacion).not.toBeNull();
      expect(typeof character.fecha_creacion).toBe("string");

      expect(character.fecha_edicion).not.toBeNull();
      expect(typeof character.fecha_edicion).toBe("string");

      expect(character.url).not.toBeNull();
      expect(typeof character.url).toBe("string");
    }
  });
});
describe("callAnyApiStarWars", () => {
  for (const root of helper.roots) {
    it(`Se llama correctamente a cualquier api de People Starwars por id y root ${root}`, async () => {
      let id = root === "starships" ? 2 : root === "vehicles" ? 7 : 1;
      const response = await controller.callAnyApiStarWars(root, id, 0);
      expect(response).not.toBeNull();
      expect(typeof response).toBe("object");
    });
  }
});
describe("createCharacter", () => {
  it("Crea correctamente un personaje en dynamo", async () => {
    const response = await controller.createCharacter(objectCharacter);
    expect(response).not.toBeNull();
    expect(typeof response).toBe("object");

    expect(response).toHaveProperty("id");
    expect(response).toHaveProperty("nombre");
    expect(response).toHaveProperty("altura");
    expect(response).toHaveProperty("masa");
    expect(response).toHaveProperty("color_cabello");
    expect(response).toHaveProperty("color_piel");
    expect(response).toHaveProperty("color_ojos");
    expect(response).toHaveProperty("año_nacimiento");
    expect(response).toHaveProperty("genero");
    expect(response).toHaveProperty("peliculas");

    expect(response.id).not.toBeNull();
    expect(typeof response.id).toBe("number");

    expect(response.nombre).not.toBeNull();
    expect(typeof response.nombre).toBe("string");

    expect(response.altura).not.toBeNull();
    expect(typeof response.altura).toBe("number");

    expect(response.masa).not.toBeNull();
    expect(typeof response.masa).toBe("number");

    expect(response.color_cabello).not.toBeNull();
    expect(typeof response.color_cabello).toBe("string");

    expect(response.color_piel).not.toBeNull();
    expect(typeof response.color_piel).toBe("string");

    expect(response.color_ojos).not.toBeNull();
    expect(typeof response.color_ojos).toBe("string");

    expect(response.año_nacimiento).not.toBeNull();
    expect(typeof response.año_nacimiento).toBe("string");

    expect(response.genero).not.toBeNull();
    expect(typeof response.genero).toBe("string");

    expect(response.peliculas).not.toBeNull();
    expect(typeof response.peliculas).toBe("object");
  });
  it("Deberia fallar si ya hay un personaje con ese mismo id", async () => {
    try {
      await controller.createCharacter(objectCharacter);
    } catch (error) {
      expect(error).not.toBeNull();
    }
  });
  it("Deberia fallar si falta un campo de los que son requeridos", async () => {
    try {
      await controller.createCharacter(
        _.omit(objectCharacter.altura, ["color_cabello", "masa"])
      );
    } catch (error) {
      expect(error).not.toBeNull();
    }
  });
});
describe("listCharacters", () => {
  it("Trae todos los registros que contengan el nombre que enviamos", async () => {
    const response = await controller.listCharacters();
    expect(response).not.toBeNull();
    expect(typeof response).toBe("object");

    for (const character of response) {
      expect(character).toHaveProperty("id");
      expect(character).toHaveProperty("nombre");
      expect(character).toHaveProperty("altura");
      expect(character).toHaveProperty("masa");
      expect(character).toHaveProperty("color_cabello");
      expect(character).toHaveProperty("color_piel");
      expect(character).toHaveProperty("color_ojos");
      expect(character).toHaveProperty("año_nacimiento");
      expect(character).toHaveProperty("genero");

      expect(character.id).not.toBeNull();
      expect(typeof character.id).toBe("number");

      expect(character.nombre).not.toBeNull();
      expect(typeof character.nombre).toBe("string");

      expect(character.altura).not.toBeNull();
      expect(typeof character.altura).toBe("number");

      expect(character.masa).not.toBeNull();
      expect(typeof character.masa).toBe("number");

      expect(character.color_cabello).not.toBeNull();
      expect(typeof character.color_cabello).toBe("string");

      expect(character.color_piel).not.toBeNull();
      expect(typeof character.color_piel).toBe("string");

      expect(character.color_ojos).not.toBeNull();
      expect(typeof character.color_ojos).toBe("string");

      expect(character.año_nacimiento).not.toBeNull();
      expect(typeof character.año_nacimiento).toBe("string");

      expect(character.genero).not.toBeNull();
      expect(typeof character.genero).toBe("string");
    }
  });
});
