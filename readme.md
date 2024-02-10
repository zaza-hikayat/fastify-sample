# Test - Sample API
## How to install
### Without docker
- Please copy `.env-example` to `.env`
- Setup `.env` value according your environment
- install package with depedence `npm i`
- migrate table in to your database `npx knex migrate:latest`
- run application `npm run start`

### With docker
- Please copy `.env-example` to `.env`
- Setup `.env` value according your environment
- please set your .env `DB_HOST` value is `database`
- run your terminal `docker compose up`

## Endpoints
1. GET      /api/v1/users           fetch data users
2. GET      /api/v1/users/:id       fetch data user by id
3. POST     /api/v1/users           create data user
4. DELETE    /api/v1/users/:id      delete data user by id