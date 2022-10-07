# Star-wars-api

### Build Project
```bash
$ npm install
$ npm install -g serverless
```
### Configure Project
Configurar las varibales del .env con sus respectivas keys
```bash
##.env
DYNAMO_ACCESS_KEY_ID= <Coloca Acces Key de AWS Aqui>
DYNAMO_SECRET_KEY= <Coloca Secret Key de AWS Aqui>
DYNAMO_REGION= <Coloca la region aqui>
API_LAMBDA= <Coloca la url del apigateway del Lambda desplegado- Requerido para ejecutar el swagger en local>
##dev.config.yml
DYNAMO_ACCESS_KEY_ID: <Coloca Acces Key de AWS Aqui>
DYNAMO_SECRET_KEY: <Coloca Secret Key de AWS Aqui>
DYNAMO_REGION: <Coloca la region aqui>
```

### Deploy Project
```bash
$ serverless deploy
```
