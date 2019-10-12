FROM node

WORKDIR /abb

# Copying working directories
COPY ./package.json .
COPY ./packages/server/package.json ./packages/server/
COPY ./packages/common/package.json ./packages/common/

# Dependencies
RUN npm i -g yarn
RUN yarn install --production

COPY ./packages/server/dist/ ./packages/server/dist
COPY ./packages/common/dist/ ./packages/server/dist
COPY ./packages/server/.env.prod ./packages/server/
COPY ./ormconfig.json .

WORKDIR ./packages/server

ENV NODE_ENV production

EXPOSE 4000 

CMD ["node", "dist/index.js"]