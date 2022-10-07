/**
 *
 * @swagger
 * components:
 *  schemas:
 *    Character:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *          description: Id del Personaje, HashKey
 *        nombre:
 *          type: number
 *          description: Nombre del Personaje, rangeKey
 *        altura:
 *          type: number
 *          description: Altura del Personaje
 *        masa:
 *          type: number
 *          description: Masa del Personaje
 *        color_cabello:
 *          type: string
 *          description: Color de Cabello del Personaje
 *        color_piel:
 *          type: string
 *          description: Color de Piel del Personaje
 *        color_ojos:
 *          type: string
 *          description: Color de Ojos del Personaje
 *        año_nacimiento:
 *          type: string
 *          description: Año de Nacimiento del Personaje
 *        genero:
 *          type: string
 *          description: Genero del Personaje
 *        peliculas:
 *          type: array
 *          description: Peliculas donde estuvo el Personaje
 *          items:
 *            type: object
 *            properties:
 *              titulo:
 *                type: string
 *                description: Titulo de la Pelicula
 *              director:
 *                type: string
 *                description: Nombre del Director de la pelicula
 *      required:
 *       - id
 *       - nombre
 *       - altura
 *       - masa
 *       - color_cabello
 *       - color_piel
 *       - color_ojos
 *       - año_nacimiento
 *       - genero
 *      example:
 *        id: 10
 *        nombre: Luke Skywalker
 *        altura: 15
 *        masa: 80
 *        color_cabello: Marron
 *        color_piel: Clara
 *        color_ojos: azules
 *        año_nacimiento: 15CD
 *        genero: Masculino
 *        peliculas: [{titulo: Regreso de la Oscuridad, director: Steven Spilver}]
 */

/**
 *
 * @swagger
 * /v1/star-wars/createCharacterDynamo:
 *  post:
 *    summary: Crea un cuevo personaje en la base de datos de DynamoDB
 *    tags: [Character]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#components/schemas/Character'
 *    responses:
 *      200:
 *        description: Nuevo Personaje Creado!
 *
 *
 */

/**
 *
 * @swagger
 * /v1/star-wars/getAnyStarwarsApi:
 *  get:
 *    summary: Consulta todos las posibles schemas del api de starwars por id o lista
 *    tags: [SWAPI]
 *    parameters:
 *      - in: query
 *        name: root
 *        schema:
 *          type: string
 *        required: true
 *        description: Son todos los roots permitidos por el SWAPI son [films,people,planets,species,starships,vehicles]
 *      - in: query
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: Id del elemento en especifico del root que escojemos, si enviamos en 0 este llamara a lista por default de todo ese root
 *      - in: query
 *        name: pagina
 *        schema:
 *          type: number
 *        required: true
 *        description: Paginacion de la lista de todos los elementos del root seleccionado, solo se habilita cuando enviamos id en 0
 *    responses:
 *      200:
 *        description: Se devolvio exitosamente!
 *      404:
 *        description: Recurso no encontrado!
 */

/**
 *
 * @swagger
 * /v1/star-wars/getCharactersDynamo:
 *  get:
 *    summary: Consulta todos los personajes registrados en la base de datos de dynamo
 *    description:  Recomendacion, Desplegar primero el proyecto en lambda y crear un registro con el endpoint de createCharacterDynamo para que se cree la tabla en dynamoDB
 *    tags: [Character]
 *    responses:
 *      200:
 *        description: Se devolvio correctamente todos los personajes!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Character'
 *      404:
 *        description: Error al tratar de consultar a DynamoDB
 */

/**
 *
 * @swagger
 * /v1/star-wars/getStarwarsApiPeople:
 *  get:
 *    summary: Consulta por paginado todos los personajes de la api de StarWARS
 *    tags: [SWAPI]
 *    parameters:
 *      - in: query
 *        name: pagina
 *        schema:
 *          type: number
 *        required: true
 *        description: Paginacion de la lista de todos los elementos del root seleccionado, si se envia 0 por defecto envia el 1
 *    responses:
 *      200:
 *        description: Se devolvio exitosamente!
 */
