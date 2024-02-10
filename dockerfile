FROM node:18-alpine

RUN apk add curl

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

# RUN sleep 10
# RUN node_modules/.bin/knex migrate:latest

EXPOSE ${APP_PORT}

# CMD ["npm", "run", "start"]