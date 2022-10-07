const dynamoose = require("dynamoose");
const CharactersSchema = new dynamoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      hashKey: true,
    },
    nombre: {
      required: true,
      rangeKey: true,
      type: String,
      index: {
        global: true,
        name: "nombre_index",
      },
    },
    altura: {
      type: Number,
      required: true,
    },
    masa: {
      type: Number,
      required: true,
    },
    color_cabello: {
      type: String,
      required: true,
    },
    color_piel: {
      type: String,
      required: true,
    },
    color_ojos: {
      type: String,
      required: true,
    },
    año_nacimiento: {
      type: String,
      required: true,
    },
    genero: {
      type: String,
      required: true,
    },
    peliculas: {
      type: Array,
      schema: [
        {
          type: Object,
          schema: {
            titulo: String,
            director: String,
          },
        },
      ],
    },
  },
  {
    timestamps: {
      createdAt: "fec_creacion",
      Date,
      updatedAt: "fec_modificacion",
      Date,
    },
  }
);

const CharactersDB = dynamoose.model("CharactersDB", CharactersSchema);

module.exports = CharactersDB;
