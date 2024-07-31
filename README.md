PostgreSQL is used for the database part.

Run these commands:

npm i express body-parser nodemon

npm install knex pg

npm install typescript ts-node @types/node --save-dev

knex migrate:latest

npx knex seed:run --specific=bookSeeds.ts

npx knex seed:run --specific=authorSeed.ts

npm i joi

npm run dev
