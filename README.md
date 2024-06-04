# PROJECT_TEMPLATE


Install the folowing basic dependencies for a node project. 
I prefer to use yarn but npm is usually recommended.

yarn add express pg pg-hstore typescript ts-node-dev @types/express @types/node express-async-handler

yarn add swagger-autogen swagger-ui-express @types/swagger-ui-express 

# Package.json
"scripts": {
    "dev": "ts-node-dev src/index.ts",
    "dev-swagger": "ts-node-dev src/swagger.ts",
    "prod": "node dist/index.js"
  }