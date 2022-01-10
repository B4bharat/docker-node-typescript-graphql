FROM node:16.13.1-alpine

WORKDIR /usr/src/app/ts-graphql

COPY ./package.json /usr/src/app/ts-graphql
COPY ./yarn.lock /usr/src/app/ts-graphql
RUN yarn install

COPY . /usr/src/app/ts-graphql

RUN yarn build

EXPOSE 8080
CMD ["yarn", "start"]