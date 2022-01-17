FROM node:16.13.1-alpine

WORKDIR /usr/src/app/ts-graphql-dynamodb

COPY ./package.json /usr/src/app/ts-graphql-dynamodb
COPY ./yarn.lock /usr/src/app/ts-graphql-dynamodb
RUN yarn install

COPY . /usr/src/app/ts-graphql-dynamodb

RUN yarn build

EXPOSE 8080
CMD ["yarn", "start"]